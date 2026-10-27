'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart';

const links = [
  { href: '/#shop', label: 'Shop' },
  { href: '/#technology', label: 'Technology' },
  { href: '/#story', label: 'Story' },
];

export function Nav() {
  const { count, openCart } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={
          'fixed inset-x-0 top-0 z-40 transition-all duration-300 ' +
          (scrolled
            ? 'border-b border-ink/10 bg-bone/85 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent')
        }
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="font-display text-2xl tracking-[0.3em] text-ink"
            aria-label="Aura home"
          >
            AURA
          </Link>

          <div className="hidden items-center gap-9 md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group relative text-[13px] uppercase tracking-[0.18em] text-ink/70 transition hover:text-ink"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-aura transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              className="group relative flex items-center gap-2 rounded-full border border-ink/15 px-4 py-2 text-[12px] uppercase tracking-[0.16em] text-ink transition hover:border-ink/40 hover:bg-ink hover:text-bone"
              aria-label={`Open cart, ${count} items`}
            >
              <span>Cart</span>
              <span
                className={
                  'flex h-5 min-w-5 items-center justify-center rounded-full px-1 text-[11px] font-medium transition ' +
                  (count > 0
                    ? 'bg-aura text-ink'
                    : 'bg-ink/10 text-ink/60 group-hover:bg-bone/20 group-hover:text-bone')
                }
              >
                {count}
              </span>
            </button>

            <button
              onClick={() => setMobile((v) => !v)}
              className="ml-1 flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 md:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobile}
            >
              <span className="relative block h-3 w-4">
                <span
                  className={
                    'absolute left-0 h-px w-4 bg-ink transition-all ' +
                    (mobile ? 'top-1.5 rotate-45' : 'top-0')
                  }
                />
                <span
                  className={
                    'absolute left-0 top-1.5 h-px w-4 bg-ink transition-all ' +
                    (mobile ? 'opacity-0' : 'opacity-100')
                  }
                />
                <span
                  className={
                    'absolute left-0 h-px w-4 bg-ink transition-all ' +
                    (mobile ? 'top-1.5 -rotate-45' : 'top-3')
                  }
                />
              </span>
            </button>
          </div>
        </nav>

        {mobile && (
          <div className="border-t border-ink/10 bg-bone/95 px-5 pb-5 pt-2 backdrop-blur-xl md:hidden">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobile(false)}
                className="block border-b border-ink/5 py-3 text-sm uppercase tracking-[0.18em] text-ink/70"
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
}
