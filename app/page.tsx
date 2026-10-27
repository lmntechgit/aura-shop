import Link from 'next/link';
import Image from 'next/image';
import { products, editorial } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

const steps = [
  {
    n: '01',
    title: 'Drawn',
    body: 'Every graphic starts as a pencil drawing. Nothing goes near a screen until the line work holds up at 40mm.',
  },
  {
    n: '02',
    title: 'Screened',
    body: 'Screens are burned by hand in unit 4. Small batches mean we can pull a colour the same week if it is wrong.',
  },
  {
    n: '03',
    title: 'Pressed',
    body: 'Heat transfer for the fine script, screen for the heavy marks. Each piece is checked flat before it is folded.',
  },
];

export default function Home() {
  return (
    <>
      {/* ── OPENING: 9-col statement, 3-col action ───────────── */}
      <section className="grid-page border-b-2 border-ink pb-12 pt-10 lg:pt-14">
        <div className="col-span-6 md:col-span-9">
          <p className="label text-accent">Blaze — Est. Johannesburg</p>
          <h1 className="display mt-5 text-[clamp(44px,9vw,148px)]">
            The style
            <br />
            you love.
          </h1>
        </div>

        <div className="col-span-6 mt-8 md:col-span-3 md:mt-0 md:flex md:flex-col md:justify-end">
          <p className="text-lead text-[#333]">
            Streetwear printed in small batches. Heavyweight cotton, boxed marks,
            and a red tag that does not need to shout.
          </p>
          <Link href="/#shop" className="btn mt-6 w-full">
            Shop the range
          </Link>
        </div>
      </section>

      {/* ── FACTS: ruled rows ────────────────────────────────── */}
      <section className="grid-page border-b-2 border-ink">
        <div className="col-span-6 md:col-span-3 md:border-r-2 md:border-ink md:py-6">
          <p className="label text-[#6b6b6b]">Fact</p>
        </div>
        <div className="col-span-6 md:col-span-9">
          {[
            ['Pieces in range', '04'],
            ['Printed', 'Unit 4, by hand'],
            ['Batches', 'Small runs only'],
            ['Returns', '30 days, worn'],
          ].map(([k, v]) => (
            <div
              key={k}
              className="flex items-baseline justify-between border-b border-ink/20 py-3 last:border-0 md:py-4"
            >
              <dt className="text-meta text-[#555]">{k}</dt>
              <dd className="label">{v}</dd>
            </div>
          ))}
        </div>
      </section>

      {/* ── SHOP MATRIX: index rail + 4 ruled items ──────────── */}
      <section id="shop" className="grid-page scroll-mt-20 py-12">
        <div className="rail">
          <p className="label text-[#6b6b6b]">01 — Collection</p>
          <h2 className="display mt-3 text-[clamp(28px,3.4vw,44px)]">
            Four pieces.
          </h2>
          <p className="mt-4 max-w-[30ch] text-meta text-[#555]">
            Each one printed in a small run. No restocks promised.
          </p>
        </div>

        <div className="rail-content mt-8 md:mt-0">
          <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4 md:gap-x-6">
            {products.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── RANGE / STEPS: continuous black field ────────────── */}
      <section id="range" className="scroll-mt-20 bg-ink py-12 text-ground">
        <div className="grid-page">
          <div className="rail">
            <p className="label text-ground/50">02 — Range</p>
            <h2 className="display mt-3 text-[clamp(28px,3.4vw,44px)]">
              How it is made.
            </h2>
          </div>

          <div className="rail-content mt-8 md:mt-0">
            <div className="steps-grid">
              {steps.map((s) => (
                <div
                  key={s.n}
                  className="border-t-2 border-ground/40 py-5 md:border-t-0 md:border-l-2 md:px-5 md:first:border-l-0 md:first:pl-0"
                >
                  <p className="label text-accent">{s.n}</p>
                  <h3 className="mt-3 text-item font-strong">{s.title}</h3>
                  <p className="mt-2 text-meta text-ground/70">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EDITORIAL: tall crops, captions on grid ──────────── */}
      <section id="story" className="grid-page scroll-mt-20 py-12">
        <div className="rail">
          <p className="label text-[#6b6b6b]">03 — Story</p>
          <h2 className="display mt-3 text-[clamp(28px,3.4vw,44px)]">
            Printed, not shipped in.
          </h2>
          <p className="mt-4 max-w-[32ch] text-meta text-[#555]">
            We print what we wear. These are from the workshop and the days
            around it.
          </p>
        </div>

        <div className="rail-content mt-8 md:mt-0">
          <figure className="border-2 border-ink bg-surface">
            <video
              className="h-full w-full grayscale"
              poster="/images/blaze-film-poster.jpg"
              controls
              muted
              loop
              playsInline
              preload="none"
              aria-label="Blaze brand film: a model in a black Blaze tee in a red kitchen, with the Blaze Established 24 mark"
            >
              <source src="/images/blaze-film.mp4" type="video/mp4" />
              Your browser does not support the video element.
            </video>
            <figcaption className="border-t-2 border-ink px-3 py-2 label text-[#6b6b6b]">
              Brand film — Est. 24
            </figcaption>
          </figure>

          <div className="editorial-grid mt-6 grid grid-cols-3 gap-4 md:gap-6">
            {editorial.map((e) => (
              <figure key={e.src} className="editorial-item flex flex-col">
                <div className="aspect-[3/4] overflow-hidden bg-surface md:aspect-[3/4]">
                  <Image
                    src={e.src}
                    alt={e.alt}
                    width={800}
                    height={1066}
                    sizes="(max-width: 700px) 100vw, (max-width: 1050px) 30vw, 22vw"
                    className="h-full w-full object-cover grayscale"
                  />
                </div>
                <figcaption className="mt-2 label text-[#6b6b6b]">
                  {e.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING: broad heading + narrow action ───────────── */}
      <section className="grid-page border-t-2 border-ink py-12">
        <div className="col-span-6 md:col-span-9">
          <h2 className="display text-[clamp(32px,6vw,88px)]">
            Wear it out.
          </h2>
        </div>
        <div className="col-span-6 mt-6 md:col-span-3 md:mt-0 md:flex md:flex-col md:justify-end">
          <p className="text-meta text-[#555]">
            Free shipping over R800. Thirty days to change your mind, worn or
            not.
          </p>
          <Link href="/#shop" className="btn mt-5 w-full">
            Shop all pieces
          </Link>
        </div>
      </section>
    </>
  );
}
