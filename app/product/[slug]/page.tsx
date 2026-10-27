import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getProduct, products, formatPrice } from '@/lib/products';
import { ShoeArt } from '@/components/shoe-art';
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
  if (!product) return { title: 'Not found — Aura' };
  return {
    title: product.name + ' — ' + product.tagline + ' | Aura',
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

  return (
    <>
      <div className="mx-auto max-w-7xl px-5 pt-28 sm:px-8 sm:pt-32">
        <nav className="flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-ink/35">
          <Link href="/" className="transition hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <Link href="/#shop" className="transition hover:text-ink">
            Shop
          </Link>
          <span>/</span>
          <span className="text-ink/60">{product.name}</span>
        </nav>
      </div>

      <section className="mx-auto grid max-w-7xl gap-12 px-5 py-12 sm:px-8 lg:grid-cols-2 lg:gap-16">
        {/* gallery */}
        <div className="lg:sticky lg:top-24 lg:self-start">
          <div
            className="relative aspect-square overflow-hidden rounded-[2rem]"
            style={{ background: product.gradient }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-10">
              <ShoeArt
                gradient={product.gradient}
                accent={product.accent}
                className="w-full drop-shadow-2xl"
              />
            </div>
            {product.badge && (
              <span className="absolute left-5 top-5 rounded-full bg-ink px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-bone">
                {product.badge}
              </span>
            )}
          </div>

          <div className="mt-4 grid grid-cols-3 gap-4">
            {[
              { bg: product.gradient, rot: '-6deg', scale: 'scale-90' },
              {
                bg: 'linear-gradient(145deg, #EDEAE4 0%, #CFC4B0 100%)',
                rot: '4deg',
                scale: 'scale-75',
              },
              {
                bg: 'linear-gradient(145deg, #2A2A32 0%, #0B0B0F 100%)',
                rot: '-2deg',
                scale: 'scale-95',
              },
            ].map((v, i) => (
              <div
                key={i}
                className="flex aspect-square items-center justify-center overflow-hidden rounded-xl"
                style={{ background: v.bg }}
              >
                <ShoeArt
                  gradient={v.bg}
                  accent={product.accent}
                  sole={i === 2 ? '#3A3A42' : '#F2EFE9'}
                  className={'w-[120%] ' + v.scale}
                />
              </div>
            ))}
          </div>
        </div>

        {/* details */}
        <div>
          <div className="flex items-center gap-2 text-[12px]">
            <span className="text-aura-dark">★★★★★</span>
            <span className="tabular-nums text-ink/55">{product.rating}</span>
            <span className="text-ink/25">·</span>
            <span className="text-ink/45">{product.reviews} reviews</span>
          </div>

          <h1 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-[1.02] tracking-[-0.02em]">
            {product.name}
          </h1>
          <p className="mt-1.5 text-[15px] text-ink/50">{product.tagline}</p>

          <div className="mt-5 flex items-baseline gap-3">
            <span className="font-display text-2xl tabular-nums">
              {formatPrice(product.price)}
            </span>
            {product.compareAt && (
              <>
                <span className="text-sm text-ink/35 line-through tabular-nums">
                  {formatPrice(product.compareAt)}
                </span>
                <span className="rounded-full bg-red-50 px-2.5 py-1 text-[10px] uppercase tracking-[0.14em] text-red-700">
                  Save {formatPrice(product.compareAt - product.price)}
                </span>
              </>
            )}
          </div>

          <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
            {product.description}
          </p>

          <AddToCart product={product} />

          {/* features */}
          <div className="mt-10 border-t border-ink/10 pt-8">
            <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
              Specifications
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {product.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5 text-[13px] text-ink/65"
                >
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-aura" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* accordion-ish static blocks */}
          <div className="mt-8 divide-y divide-ink/10 border-t border-ink/10">
            {[
              ['Shipping & returns', 'Free carbon-neutral shipping over $150. 30-day wear test — run in them, return them if they are not right.'],
              ['Fit note', 'True to size for most runners. If you are between sizes or have a wide foot, size up a half.'],
            ].map(([t, d]) => (
              <details key={t} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between text-[13px] font-medium">
                  {t}
                  <span className="text-ink/30 transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-2.5 text-[13px] leading-relaxed text-ink/55">
                  {d}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* related */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-2xl">You might also like</h2>
          <Link
            href="/#shop"
            className="text-[11px] uppercase tracking-[0.16em] text-ink/45 transition hover:text-ink"
          >
            View all
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
