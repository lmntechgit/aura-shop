'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';

export function CartDrawer() {
  const { items, open, closeCart, remove, setQty, subtotal, count } = useCart();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCart();
    };
    if (open) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open, closeCart]);

  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 12;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  return (
    <div
      className={
        'fixed inset-0 z-50 transition-opacity duration-300 ' +
        (open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0')
      }
      aria-hidden={!open}
    >
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-ink/40 backdrop-blur-sm"
      />

      <aside
        className={
          'absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-bone shadow-2xl transition-transform duration-400 ease-out ' +
          (open ? 'translate-x-0' : 'translate-x-full')
        }
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5">
          <h2 className="font-display text-xl tracking-wide">
            Your bag{' '}
            <span className="ml-1 text-sm text-ink/40">({count})</span>
          </h2>
          <button
            onClick={closeCart}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink/60 transition hover:border-ink/40 hover:text-ink"
            aria-label="Close cart"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M1 1l12 12M13 1L1 13"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <div className="h-16 w-16 rounded-full border border-dashed border-ink/20" />
            <p className="text-sm text-ink/50">
              Your bag is empty. The Glide is a good place to start.
            </p>
            <Link
              href="/#shop"
              onClick={closeCart}
              className="rounded-full bg-ink px-6 py-3 text-[12px] uppercase tracking-[0.18em] text-bone transition hover:bg-ink/85"
            >
              Browse shoes
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4">
              <ul className="space-y-5">
                {items.map((i) => (
                  <li
                    key={i.id + i.size + i.color}
                    className="flex gap-4 border-b border-ink/5 pb-5"
                  >
                    <div
                      className="h-20 w-20 shrink-0 rounded-xl"
                      style={{ background: i.gradient }}
                    />
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={'/product/' + i.slug}
                          onClick={closeCart}
                          className="text-sm font-medium hover:underline"
                        >
                          {i.name}
                        </Link>
                        <span className="text-sm tabular-nums">
                          {formatPrice(i.price * i.qty)}
                        </span>
                      </div>
                      <p className="mt-0.5 text-xs text-ink/45">
                        {i.color} · Size {i.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center gap-0 rounded-full border border-ink/15">
                          <button
                            onClick={() =>
                              setQty(i.id, i.size, i.color, i.qty - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-ink/60 transition hover:text-ink"
                            aria-label="Decrease quantity"
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-xs tabular-nums">
                            {i.qty}
                          </span>
                          <button
                            onClick={() =>
                              setQty(i.id, i.size, i.color, i.qty + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center text-ink/60 transition hover:text-ink"
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(i.id, i.size, i.color)}
                          className="text-[11px] uppercase tracking-[0.14em] text-ink/35 transition hover:text-red-600"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-ink/10 px-6 py-5">
              <dl className="space-y-1.5 text-sm">
                <div className="flex justify-between text-ink/60">
                  <dt>Subtotal</dt>
                  <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between text-ink/60">
                  <dt>Shipping</dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between text-ink/60">
                  <dt>Est. tax</dt>
                  <dd className="tabular-nums">{formatPrice(tax)}</dd>
                </div>
                <div className="mt-3 flex justify-between border-t border-ink/10 pt-3 text-base font-medium">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatPrice(total)}</dd>
                </div>
              </dl>

              {subtotal > 0 && subtotal < 150 && (
                <p className="mt-3 rounded-lg bg-aura/10 px-3 py-2 text-[11px] text-aura-dark">
                  Add {formatPrice(150 - subtotal)} more for free shipping.
                </p>
              )}

              <Link
                href="/checkout"
                onClick={closeCart}
                className="mt-4 flex w-full items-center justify-center rounded-full bg-ink py-4 text-[12px] uppercase tracking-[0.2em] text-bone transition hover:bg-ink/85"
              >
                Checkout
              </Link>
              <p className="mt-3 text-center text-[10px] uppercase tracking-[0.14em] text-ink/35">
                Demo store — no real payments
              </p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
