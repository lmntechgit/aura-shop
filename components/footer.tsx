import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-bone">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-[0.3em]">AURA</p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone/50">
              Footwear engineered to disappear. Made in small runs, built to
              last more than a season.
            </p>
            <form className="mt-8 flex max-w-sm gap-2">
              <input
                type="email"
                placeholder="Email address"
                aria-label="Email address"
                className="min-w-0 flex-1 rounded-full border border-bone/20 bg-transparent px-4 py-3 text-sm text-bone placeholder:text-bone/35 focus:border-aura focus:outline-none"
              />
              <button
                type="button"
                className="rounded-full bg-aura px-5 py-3 text-[11px] uppercase tracking-[0.16em] text-ink transition hover:bg-aura-light"
              >
                Join
              </button>
            </form>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-bone/40">
              Shop
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-bone/60">
              <li>
                <Link href="/#shop" className="transition hover:text-aura">
                  All shoes
                </Link>
              </li>
              <li>
                <Link
                  href="/product/aura-glide"
                  className="transition hover:text-aura"
                >
                  Aura Glide
                </Link>
              </li>
              <li>
                <Link
                  href="/product/aura-eclipse"
                  className="transition hover:text-aura"
                >
                  Aura Eclipse
                </Link>
              </li>
              <li>
                <Link
                  href="/product/aura-terra"
                  className="transition hover:text-aura"
                >
                  Aura Terra
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-bone/40">
              Company
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-bone/60">
              <li>
                <Link href="/#story" className="transition hover:text-aura">
                  Our story
                </Link>
              </li>
              <li>
                <Link href="/#technology" className="transition hover:text-aura">
                  Technology
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="transition hover:text-aura">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-bone/10 pt-6 text-[11px] uppercase tracking-[0.14em] text-bone/30 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Aura Athletics</p>
          <p>Demo store · Deployed on Dokploy</p>
        </div>
      </div>
    </footer>
  );
}
