'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart';

const links = [
  { href: '/#shop', label: 'Shop', n: '01' },
  { href: '/#range', label: 'Range', n: '02' },
  { href: '/#story', label: 'Story', n: '03' },
];

export function Nav() {
  const { count, openCart } = useCart();
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={
        'sticky top-0 z-40 bg-ground ' +
        (stuck ? 'border-b-2 border-ink' : 'border-b-2 border-ink')
      }
    >
      <div className="grid-page h-16 items-center">
        <Link
          href="/"
          className="col-span-4 text-[15px] font-display uppercase tracking-[-0.02em] sm:col-span-3"
          aria-label="Blaze home"
        >
          BLAZE
        </Link>

        <nav aria-label="Primary" className="hidden md:col-span-6 md:block">
          <ul className="flex gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="label hover:text-accent focus-visible:text-accent"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-8 flex items-center justify-end gap-2 sm:col-span-6 md:col-span-3">
          <button
            onClick={openCart}
            className="label border-2 border-ink px-3 py-2 hover:bg-ink hover:text-ground"
            aria-label={`Open bag, ${count} item${count === 1 ? '' : 's'}`}
          >
            Bag <span aria-hidden="true">(</span>
            <span className="tabular-nums">{count}</span>
            <span aria-hidden="true">)</span>
          </button>

          <button
            onClick={() => setOpen((v) => !v)}
            className="label border-2 border-ink px-3 py-2 hover:bg-ink hover:text-ground md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-nav" aria-label="Primary mobile" className="border-t-2 border-ink md:hidden">
          <div className="grid-page py-2">
            <ul className="col-span-2">
              {links.map((l) => (
                <li key={l.href} className="border-b border-ink/20 last:border-0">
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline justify-between py-3"
                  >
                    <span className="text-[18px]">{l.label}</span>
                    <span className="label text-[#6b6b6b]">{l.n}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}
