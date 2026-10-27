'use client';

import Link from 'next/link';
import { formatPrice } from '@/lib/products';
import type { Product } from '@/lib/products';
import { ShoeArt } from '@/components/shoe-art';

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={'/product/' + product.slug}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-ink/8 bg-white/60 transition-all duration-500 hover:-translate-y-1 hover:border-ink/15 hover:shadow-[0_24px_60px_-24px_rgba(11,11,15,0.35)]"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-bone">
        <div
          className="absolute inset-0 opacity-70 transition-transform duration-700 group-hover:scale-105"
          style={{ background: product.gradient }}
        />
        <div className="absolute inset-0 flex items-center justify-center p-6">
          <ShoeArt
            gradient={product.gradient}
            accent={product.accent}
            className="w-full max-w-[280px] drop-shadow-xl transition-transform duration-700 group-hover:-translate-y-1 group-hover:rotate-[-3deg] group-hover:scale-105"
          />
        </div>

        {product.badge && (
          <span className="absolute left-4 top-4 rounded-full bg-ink px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-bone">
            {product.badge}
          </span>
        )}
        {product.compareAt && product.compareAt > product.price && (
          <span className="absolute right-4 top-4 rounded-full bg-red-600 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-white">
            Save {formatPrice(product.compareAt - product.price)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-tight">{product.name}</h3>
            <p className="mt-0.5 text-[12px] text-ink/45">{product.tagline}</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium tabular-nums">
              {formatPrice(product.price)}
            </p>
            {product.compareAt && (
              <p className="text-[11px] text-ink/35 line-through tabular-nums">
                {formatPrice(product.compareAt)}
              </p>
            )}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            {product.colors.map((c) => (
              <span
                key={c.name}
                title={c.name}
                className="h-3.5 w-3.5 rounded-full ring-1 ring-ink/15"
                style={{ background: c.hex }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1 text-[11px] text-ink/45">
            <StarIcon />
            <span className="tabular-nums">{product.rating}</span>
            <span className="text-ink/25">({product.reviews})</span>
          </div>
        </div>

        <span className="mt-4 inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.16em] text-ink/60 transition group-hover:text-ink">
          View shoe
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M1 6h9M6.5 2.5L10 6l-3.5 3.5"
              stroke="currentColor"
              strokeWidth="1.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}

function StarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 12 12" fill="#C6A664">
      <path d="M6 0l1.6 3.7 4 .4-3 2.7.9 3.9L6 8.7 2.5 10.7l.9-3.9-3-2.7 4-.4z" />
    </svg>
  );
}
