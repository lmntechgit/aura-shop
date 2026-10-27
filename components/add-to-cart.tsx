'use client';

import { useState } from 'react';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';
import type { Product } from '@/lib/products';

export function AddToCart({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState<string | null>(null);
  const [color, setColor] = useState(product.colors[0].name);
  const [qty, setQty] = useState(1);
  const [error, setError] = useState(false);
  const [done, setDone] = useState(false);

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
        image: product.images[0].src,
      },
      qty
    );
    setDone(true);
    window.setTimeout(() => setDone(false), 2000);
  };

  return (
    <div className="mt-6">
      {product.colors.length > 1 && (
        <fieldset className="border-t-2 border-ink pt-3">
          <legend className="label text-[#6b6b6b]">Colourway — {color}</legend>
          <div className="mt-2 flex gap-2">
            {product.colors.map((c) => (
              <button
                key={c.name}
                onClick={() => setColor(c.name)}
                aria-pressed={color === c.name}
                className={
                  'label border-2 px-2.5 py-1.5 ' +
                  (color === c.name
                    ? 'border-ink bg-ink text-ground'
                    : 'border-ink/30 hover:border-ink')
                }
              >
                {c.name}
              </button>
            ))}
          </div>
        </fieldset>
      )}

      <fieldset className="mt-5 border-t-2 border-ink pt-3">
        <legend className="label text-[#6b6b6b]">Size</legend>
        <div className="mt-2 flex flex-wrap gap-2">
          {product.sizes.map((s) => (
            <button
              key={s}
              onClick={() => {
                setSize(s);
                setError(false);
              }}
              aria-pressed={size === s}
              className={
                'min-w-[3rem] border-2 py-2 text-meta tabular-nums ' +
                (size === s
                  ? 'border-ink bg-ink text-ground'
                  : 'border-ink/30 hover:border-ink')
              }
            >
              {s}
            </button>
          ))}
        </div>
        {error && (
          <p role="alert" className="mt-2 text-meta font-strong text-accent">
            Please choose a size.
          </p>
        )}
      </fieldset>

      <div className="mt-6 flex items-stretch gap-3 border-t-2 border-ink pt-4">
        <div className="flex items-center border-2 border-ink">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="h-11 w-10 hover:bg-ink hover:text-ground"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-8 text-center text-meta tabular-nums" aria-live="polite">
            {qty}
          </span>
          <button
            onClick={() => setQty((q) => Math.min(9, q + 1))}
            className="h-11 w-10 hover:bg-ink hover:text-ground"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <button onClick={onAdd} className="btn flex-1">
          {done ? 'Added to bag' : 'Add to bag — ' + formatPrice(product.price * qty)}
        </button>
      </div>

      <p aria-live="polite" className="mt-3 label text-[#6b6b6b]">
        Free shipping over R800 · 30-day returns · Demo store
      </p>
    </div>
  );
}
