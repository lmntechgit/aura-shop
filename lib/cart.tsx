'use client';

import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';
import type { ReactNode } from 'react';

export type CartItem = {
  id: string;
  slug: string;
  name: string;
  price: number;
  size: string;
  color: string;
  qty: number;
  image: string;
};

type State = { items: CartItem[]; open: boolean };

type Action =
  | { type: 'ADD'; item: Omit<CartItem, 'qty'>; qty?: number }
  | { type: 'REMOVE'; id: string; size: string; color: string }
  | { type: 'SET_QTY'; id: string; size: string; color: string; qty: number }
  | { type: 'CLEAR' }
  | { type: 'OPEN' }
  | { type: 'CLOSE' }
  | { type: 'HYDRATE'; items: CartItem[] };

const key = (i: { id: string; size: string; color: string }) =>
  i.id + '|' + i.size + '|' + i.color;

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD': {
      const incoming = { ...action.item, qty: action.qty ?? 1 };
      const idx = state.items.findIndex(
        (x) => key(x) === key(incoming)
      );
      if (idx >= 0) {
        const items = [...state.items];
        items[idx] = { ...items[idx], qty: items[idx].qty + incoming.qty };
        return { ...state, items, open: true };
      }
      return { ...state, items: [...state.items, incoming], open: true };
    }
    case 'REMOVE':
      return {
        ...state,
        items: state.items.filter((x) => key(x) !== key(action)),
      };
    case 'SET_QTY':
      return {
        ...state,
        items: state.items
          .map((x) =>
            key(x) === key(action) ? { ...x, qty: Math.max(0, action.qty) } : x
          )
          .filter((x) => x.qty > 0),
      };
    case 'CLEAR':
      return { ...state, items: [] };
    case 'OPEN':
      return { ...state, open: true };
    case 'CLOSE':
      return { ...state, open: false };
    case 'HYDRATE':
      return { ...state, items: action.items };
    default:
      return state;
  }
}

const CartContext = createContext<{
  items: CartItem[];
  open: boolean;
  add: (item: Omit<CartItem, 'qty'>, qty?: number) => void;
  remove: (id: string, size: string, color: string) => void;
  setQty: (id: string, size: string, color: string, qty: number) => void;
  clear: () => void;
  openCart: () => void;
  closeCart: () => void;
  count: number;
  subtotal: number;
} | null>(null);

const STORAGE_KEY = 'aura-cart-v1';

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], open: false });

  // hydrate from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) dispatch({ type: 'HYDRATE', items: parsed });
      }
    } catch {
      /* ignore */
    }
  }, []);

  // persist
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      /* ignore */
    }
  }, [state.items]);

  const value = useMemo(() => {
    const count = state.items.reduce((n, i) => n + i.qty, 0);
    const subtotal = state.items.reduce((n, i) => n + i.qty * i.price, 0);
    return {
      items: state.items,
      open: state.open,
      count,
      subtotal,
      add: (item: Omit<CartItem, 'qty'>, qty?: number) =>
        dispatch({ type: 'ADD', item, qty }),
      remove: (id: string, size: string, color: string) =>
        dispatch({ type: 'REMOVE', id, size, color }),
      setQty: (id: string, size: string, color: string, qty: number) =>
        dispatch({ type: 'SET_QTY', id, size, color, qty }),
      clear: () => dispatch({ type: 'CLEAR' }),
      openCart: () => dispatch({ type: 'OPEN' }),
      closeCart: () => dispatch({ type: 'CLOSE' }),
    };
  }, [state]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used inside CartProvider');
  return ctx;
}
