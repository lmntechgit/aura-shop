import Link from 'next/link';
import Image from 'next/image';
import { formatPrice } from '@/lib/products';
import type { Product } from '@/lib/products';

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="border-t-2 border-ink pt-3">
      <Link href={'/product/' + product.slug} className="group block">
        <div className="flex items-baseline justify-between">
          <span className="label text-[#6b6b6b]">
            {String(index + 1).padStart(2, '0')}
          </span>
          {product.badge && (
            <span className="label bg-accent px-1.5 py-0.5 text-ground">
              {product.badge}
            </span>
          )}
        </div>

        <figure className="mt-3 aspect-[3/4] overflow-hidden bg-surface">
          <Image
            src={product.images[0].src}
            alt={product.images[0].alt}
            width={900}
            height={1200}
            sizes="(max-width: 700px) 50vw, (max-width: 1050px) 33vw, 25vw"
            className="h-full w-full object-cover grayscale"
          />
        </figure>

        <h3 className="mt-3 text-[18px] font-strong leading-tight group-hover:underline group-hover:decoration-2 group-hover:underline-offset-4">
          {product.name}
        </h3>
        <p className="mt-1 text-meta text-[#555]">{product.tagline}</p>

        <p className="mt-2 flex items-baseline gap-2 text-meta">
          <span className="tabular-nums font-strong">{formatPrice(product.price)}</span>
          {product.compareAt && (
            <span className="tabular-nums text-[#767676] line-through">
              {formatPrice(product.compareAt)}
            </span>
          )}
        </p>
      </Link>
    </article>
  );
}
