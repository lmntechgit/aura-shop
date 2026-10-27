import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProduct, products, formatPrice } from '@/lib/products';
import { AddToCart } from '@/components/add-to-cart';
import { ProductCard } from '@/components/product-card';

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: 'Not found — Blaze' };
  return {
    title: product.name + ' — ' + product.tagline + ' | Blaze',
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);
  const hero = product.images[0];

  return (
    <>
      <div className="grid-page border-b-2 border-ink py-3">
        <nav aria-label="Breadcrumb" className="col-span-6 md:col-span-12">
          <ol className="flex flex-wrap items-center gap-2 label text-[#6b6b6b]">
            <li>
              <Link href="/" className="hover:text-ink">Home</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link href="/#shop" className="hover:text-ink">Shop</Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-ink" aria-current="page">{product.name}</li>
          </ol>
        </nav>
      </div>

      <section className="grid-page py-8 md:py-12">
        {/* images — cols 1-7 */}
        <div className="col-span-6 md:col-span-7">
          <figure className="aspect-[4/5] overflow-hidden border-2 border-ink bg-surface">
            <Image
              src={hero.src}
              alt={hero.alt}
              width={1200}
              height={1500}
              sizes="(max-width: 700px) 100vw, 58vw"
              className="h-full w-full object-cover grayscale"
              priority
            />
          </figure>

          <div className="mt-3 grid grid-cols-3 gap-3 sm:grid-cols-4">
            {product.images.slice(1).map((im) => (
              <figure key={im.src} className="aspect-square overflow-hidden border-2 border-ink bg-surface">
                <Image
                  src={im.src}
                  alt={im.alt}
                  width={600}
                  height={600}
                  sizes="20vw"
                  className="h-full w-full object-cover grayscale"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* detail — cols 8-12 */}
        <div className="col-span-6 mt-8 md:col-span-5 md:mt-0 md:border-l-2 md:border-ink md:pl-6">
          <div className="flex items-center gap-2">
            {product.badge && (
              <span className="label bg-accent px-1.5 py-0.5 text-ground">{product.badge}</span>
            )}
            <span className="label text-[#6b6b6b]">
              <span className="sr-only">Rated </span>
              {product.rating} / 5 ({product.reviews})
            </span>
          </div>

          <h1 className="display mt-3 text-[clamp(30px,4vw,52px)]">{product.name}</h1>
          <p className="mt-2 text-lead text-[#555]">{product.tagline}</p>

          <p className="mt-4 flex items-baseline gap-3">
            <span className="text-[24px] font-strong tabular-nums">
              {formatPrice(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-meta text-[#767676] line-through tabular-nums">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </p>

          <p className="mt-5 text-body text-[#333]">{product.description}</p>

          <AddToCart product={product} />

          <section className="mt-8 border-t-2 border-ink pt-4">
            <h2 className="label text-[#6b6b6b]">Specification</h2>
            <dl className="mt-2">
              {product.features.map((f) => (
                <div key={f} className="border-b border-ink/20 py-2 text-meta">
                  {f}
                </div>
              ))}
            </dl>
          </section>

          <details className="group mt-6 border-t-2 border-ink pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between label">
              Shipping &amp; returns
              <span aria-hidden="true" className="text-accent group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-meta text-[#555]">
              Free shipping over R800. Thirty-day returns, worn or not.
            </p>
          </details>

          <details className="group mt-3 border-t-2 border-ink pt-4">
            <summary className="flex cursor-pointer list-none items-center justify-between label">
              Fit
              <span aria-hidden="true" className="text-accent group-open:hidden">+</span>
              <span aria-hidden="true" className="hidden group-open:inline">−</span>
            </summary>
            <p className="mt-3 text-meta text-[#555]">
              Cut oversized. Take your usual size for the intended drape, or one
              down for a closer fit.
            </p>
          </details>
        </div>
      </section>

      <section className="grid-page border-t-2 border-ink py-10">
        <div className="rail">
          <p className="label text-[#6b6b6b]">04 — Also</p>
          <h2 className="display mt-3 text-[clamp(24px,2.6vw,32px)]">More pieces</h2>
        </div>
        <div className="rail-content mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-3 md:gap-x-6">
            {related.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
