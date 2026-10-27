'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import type { Product } from '@/lib/products';

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState<number | null>(null);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);
  const [added, setAdded] = useState(false);

  const onAdd = () => {
    if (!size) {
      setError(true);
      return;
    }
    setError(false);
    add(
      {
        id: product.id,
        slug: product.slug,
        name: product.name,
        price: product.price,
        size,
        color,
        gradient: product.gradient,
      },
      qty
    );
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <div className="mt-8">
      {/* colour */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">
          Colourway — <span className="text-ink/70">{color}</span>
        </p>
        <div className="mt-3 flex gap-2.5">
          {product.colors.map((c) => (
            <button
              key={c.name}
              onClick={() => setColor(c.name)}
              aria-label={c.name}
              aria-pressed={color === c.name}
              className={
                'h-9 w-9 rounded-full ring-1 ring-offset-2 ring-offset-bone transition ' +
                (color === c.name
                  ? 'ring-ink'
                  : 'ring-ink/15 hover:ring-ink/40')
              }
              style={{ background: c.hex }}
            />
          ))}
        </div>
      </div>

      {/* size */}
      <div className="mt-7">
        <div className="flex items-baseline justify-between">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink/45">
            Size (US)
          </p>
          <button className="text-[11px] text-ink/40 underline decoration-ink/20 underline-offset-2 transition hover:text-ink">
            Size guide
          </button>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSize(s);
                setError(false);
              }}
              aria-pressed={size === s}
              className={
                'rounded-lg border py-2.5 text-sm tabular-nums transition ' +
                (size === s
                  ? 'border-ink bg-ink text-bone'
                  : 'border-ink/15 text-ink/70 hover:border-ink/45')
              }
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p className="mt-2.5 text-[12px] text-red-600">
            Please choose a size first.
          </p>
        )}
      </div>

      {/* qty + cta */}
      <div className="mt-8 flex gap-3">
        <div className="flex items-center rounded-full border border-ink/15">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-12 w-11 items-center justify-center text-ink/60 transition hover:text-ink"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-7 text-center text-sm tabular-nums">{qty}</span>
          <button
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            className="flex h-12 w-11 items-center justify-center text-ink/60 transition hover:text-ink"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button
          onClick={onAdd}
          className={
            'flex-1 rounded-full py-4 text-[12px] uppercase tracking-[0.2em] transition ' +
            (added
              ? 'bg-emerald-700 text-white'
              : 'bg-ink text-bone hover:bg-ink/85')
          }
        >
          {added ? 'Added to bag ✓' : 'Add to bag — ' + formatPrice(product.price * qty)}
        </button>
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-[0.14em] text-ink/35">
        Free shipping over $150 · 30-day wear test · Demo store
      </p>
    </div>
  );
}
