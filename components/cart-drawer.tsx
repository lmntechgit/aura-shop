'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

  const shipping = subtotal >= 800 || subtotal === 0 ? 0 : 80;
  const total = subtotal + shipping;

  return (
    <div
      className={
        'fixed inset-0 z-50 ' +
        (open ? 'pointer-events-auto' : 'pointer-events-none')
      }
      aria-hidden={!open}
    >
      <div
        onClick={closeCart}
        aria-hidden="true"
        className={'absolute inset-0 bg-ink/60 ' + (open ? 'opacity-100' : 'opacity-0')}
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Bag"
        className={
          'absolute right-0 top-0 flex h-full w-full max-w-[26rem] flex-col border-l-2 border-ink bg-ground ' +
          (open ? 'translate-x-0' : 'translate-x-full')
        }
      >
        <div className="flex items-center justify-between border-b-2 border-ink px-4 py-3">
          <h2 className="label">
            Bag <span className="tabular-nums">({count})</span>
          </h2>
          <button onClick={closeCart} className="label border-2 border-ink px-2 py-1 hover:bg-ink hover:text-ground">
            Close
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-start justify-center gap-4 px-4">
            <p className="text-meta text-[#555]">Your bag is empty.</p>
            <Link href="/#shop" onClick={closeCart} className="btn w-full">
              Shop the range
            </Link>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto">
              <ul>
                {items.map((i) => (
                  <li
                    key={i.id + i.size + i.color}
                    className="flex gap-3 border-b border-ink/20 px-4 py-3"
                  >
                    <div className="h-20 w-16 shrink-0 border-2 border-ink bg-surface">
                      <Image
                        src={i.image}
                        alt=""
                        width={160}
                        height={200}
                        className="h-full w-full object-cover grayscale"
                      />
                    </div>
                    <div className="flex min-w-0 flex-1 flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={'/product/' + i.slug}
                          onClick={closeCart}
                          className="text-meta font-strong hover:underline"
                        >
                          {i.name}
                        </Link>
                        <span className="text-meta tabular-nums">
                          {formatPrice(i.price * i.qty)}
                        </span>
                      </div>
                      <p className="mt-0.5 label text-[#6b6b6b]">
                        {i.color} · {i.size}
                      </p>
                      <div className="mt-auto flex items-center justify-between pt-2">
                        <div className="flex items-center border-2 border-ink">
                          <button
                            onClick={() => setQty(i.id, i.size, i.color, i.qty - 1)}
                            className="h-7 w-7 text-meta hover:bg-ink hover:text-ground"
                            aria-label={`Decrease quantity of ${i.name}`}
                          >
                            −
                          </button>
                          <span className="w-6 text-center text-meta tabular-nums">{i.qty}</span>
                          <button
                            onClick={() => setQty(i.id, i.size, i.color, i.qty + 1)}
                            className="h-7 w-7 text-meta hover:bg-ink hover:text-ground"
                            aria-label={`Increase quantity of ${i.name}`}
                          >
                            +
                          </button>
                        </div>
                        <button
                          onClick={() => remove(i.id, i.size, i.color)}
                          className="label text-[#6b6b6b] hover:text-accent"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t-2 border-ink px-4 py-4">
              <dl className="space-y-1.5 text-meta">
                <div className="flex justify-between">
                  <dt className="text-[#555]">Subtotal</dt>
                  <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[#555]">Shipping</dt>
                  <dd className="tabular-nums">
                    {shipping === 0 ? 'Free' : formatPrice(shipping)}
                  </dd>
                </div>
                <div className="flex justify-between border-t-2 border-ink pt-2 text-[17px] font-strong">
                  <dt>Total</dt>
                  <dd className="tabular-nums">{formatPrice(total)}</dd>
                </div>
              </dl>

              {subtotal > 0 && subtotal < 800 && (
                <p className="mt-2 text-meta text-accent">
                  {formatPrice(800 - subtotal)} more for free shipping.
                </p>
              )}

              <Link href="/checkout" onClick={closeCart} className="btn mt-3 w-full">
                Checkout
              </Link>
              <p className="mt-2 label text-[#6b6b6b]">Demo store — no payments</p>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
