import Link from 'next/link';
import { products } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { ShoeArt } from '@/components/shoe-art';

const marquee = [
  'Free shipping over $150',
  'AuraFoam™ nitrogen midsole',
  '30-day wear test',
  'Carbon-neutral delivery',
  'Made in small runs',
];

export default function Home() {
  const hero = products[0];

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="aura-grain relative overflow-hidden pt-28 pb-16 sm:pt-36">
        <div
          className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full opacity-40 blur-3xl"
          style={{
            background:
              'radial-gradient(circle at 40% 40%, #C6A664 0%, transparent 65%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-ink/55">
              <span className="h-1.5 w-1.5 rounded-full bg-aura" />
              New — Aura Eclipse
            </span>

            <h1 className="mt-7 font-display text-[clamp(2.8rem,7vw,5.2rem)] leading-[0.95] tracking-[-0.02em] text-balance">
              The shoe that
              <br />
              <span className="italic text-aura-dark">disappears</span> on foot.
            </h1>

            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
              Aura builds performance footwear around a single idea: you should
              feel the run, not the shoe. Nitrogen-infused foam, a single-knit
              upper, and nothing you don&apos;t need.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="#shop"
                className="group inline-flex items-center gap-2.5 rounded-full bg-ink px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-bone transition hover:bg-ink/85"
              >
                Shop the collection
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 12 12"
                  fill="none"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M1 6h9M6.5 2.5L10 6l-3.5 3.5"
                    stroke="currentColor"
                    strokeWidth="1.3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
              <Link
                href="/product/aura-glide"
                className="rounded-full border border-ink/20 px-7 py-4 text-[12px] uppercase tracking-[0.18em] text-ink transition hover:border-ink/50"
              >
                Meet the Glide
              </Link>
            </div>

            <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-ink/10 pt-7">
              {[
                ['236g', 'Per shoe'],
                ['4.8★', '2,140 reviews'],
                ['30d', 'Wear test'],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="font-display text-2xl">{v}</dt>
                  <dd className="mt-0.5 text-[11px] uppercase tracking-[0.14em] text-ink/40">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* hero visual */}
          <div className="relative animate-fade-up">
            <div
              className="relative aspect-square w-full overflow-hidden rounded-[2rem]"
              style={{ background: hero.gradient }}
            >
              <div className="absolute inset-0 flex items-center justify-center p-10">
                <ShoeArt
                  gradient={hero.gradient}
                  accent={hero.accent}
                  className="w-full animate-floaty drop-shadow-2xl"
                />
              </div>
              <div className="absolute bottom-5 left-5 rounded-xl bg-ink/85 px-4 py-3 backdrop-blur">
                <p className="text-[10px] uppercase tracking-[0.18em] text-bone/50">
                  Featured
                </p>
                <p className="mt-0.5 font-display text-lg text-bone">
                  {hero.name}
                </p>
              </div>
              <div className="absolute right-5 top-5 rounded-full bg-bone/85 px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] text-ink/70 backdrop-blur">
                $180
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────── */}
      <section className="overflow-hidden border-y border-ink/10 bg-ink py-3.5">
        <div className="flex w-max animate-marquee">
          {[0, 1].map((dup) => (
            <div key={dup} className="flex shrink-0 items-center">
              {marquee.map((m) => (
                <span
                  key={m + dup}
                  className="flex items-center whitespace-nowrap px-8 text-[11px] uppercase tracking-[0.22em] text-bone/45"
                >
                  {m}
                  <span className="ml-8 h-1 w-1 rounded-full bg-aura" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOP ─────────────────────────────────────────── */}
      <section id="shop" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/40">
              The collection
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight">
              Four shoes. One idea.
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-ink/50">
            Every Aura starts from the foam up. Pick your surface — road, night,
            trail, or recovery.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGY ───────────────────────────────────── */}
      <section
        id="technology"
        className="scroll-mt-24 border-y border-ink/10 bg-white/50 py-24"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/40">
              Technology
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-balance">
              Three layers, each doing exactly one job.
            </h2>
          </div>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              {
                n: '01',
                t: 'AuraFoam™',
                d: 'Nitrogen is injected into the midsole under pressure, creating millions of closed cells. The result is 32% lighter than EVA with markedly better energy return.',
              },
              {
                n: '02',
                t: 'Knit Single-Shell',
                d: 'The upper is knitted as one continuous piece on a 3D loom. No overlays, no glue lines, no hot spots — just a sock that happens to hold a carbon plate.',
              },
              {
                n: '03',
                t: 'GripFlow Outsole',
                d: 'Rubber is mapped only where your foot actually lands, based on pressure data from 40,000 runners. Less material, more traction, longer wear.',
              },
            ].map((f) => (
              <div key={f.n} className="group">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 font-display text-sm transition group-hover:border-aura group-hover:bg-aura/10">
                  {f.n}
                </div>
                <h3 className="mt-5 font-display text-xl">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/55">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY ────────────────────────────────────────── */}
      <section id="story" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-24 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] bg-ink">
            <div
              className="absolute inset-0 opacity-80"
              style={{
                background:
                  'radial-gradient(circle at 30% 20%, #C6A664 0%, transparent 55%), linear-gradient(160deg, #1a1a20 0%, #0B0B0F 100%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <ShoeArt
                gradient=""
                accent="#C6A664"
                className="w-full max-w-sm opacity-90"
                sole="#E8E2D8"
              />
            </div>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-ink/40">
              Our story
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,4vw,3rem)] leading-tight text-balance">
              Started because a running shoe shouldn&apos;t need a break-in period.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
              We spent two years prototyping in a garage in Portland, convinced
              that the industry had optimised for shelf appeal instead of the
              thing that matters — how the shoe behaves at mile eighteen.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Aura ships four shoes, not forty. Each one is refined annually
              rather than replaced, and every pair comes with a 30-day wear test
              because you cannot judge a shoe from a shop floor.
            </p>
            <Link
              href="#shop"
              className="mt-8 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[12px] uppercase tracking-[0.18em] text-ink transition hover:border-ink"
            >
              Shop Aura
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M1 6h9M6.5 2.5L10 6l-3.5 3.5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
