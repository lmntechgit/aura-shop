'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';

export default function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart();
  const [step, setStep] = useState<'form' | 'done'>('form');
  const [form, setForm] = useState({
    email: '',
    name: '',
    address: '',
    city: '',
    zip: '',
  });

  const shipping = subtotal >= 150 || subtotal === 0 ? 0 : 12;
  const tax = Math.round(subtotal * 0.08);
  const total = subtotal + shipping + tax;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('done');
    clear();
  };

  if (step === 'done') {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-5 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-aura/15">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
            <path
              d="M5 13.5l6 6L21 7"
              stroke="#9C7F42"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 className="mt-6 font-display text-3xl">Order confirmed</h1>
        <p className="mt-3 text-sm leading-relaxed text-ink/55">
          Thanks{form.name ? ', ' + form.name.split(' ')[0] : ''}. This is a demo
          store, so nothing was charged — but the flow works end to end.
        </p>
        <p className="mt-6 rounded-full border border-ink/15 px-4 py-2 font-mono text-[12px] tracking-wider text-ink/60">
          AURA-{Math.random().toString(36).slice(2, 8).toUpperCase()}
        </p>
        <Link
          href="/"
          className="mt-9 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-bone transition hover:bg-ink/85"
        >
          Back to the shop
        </Link>
      </div>
    );
  }

  if (count === 0) {
    return (
      <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-5 text-center">
        <h1 className="font-display text-3xl">Your bag is empty</h1>
        <p className="mt-3 text-sm text-ink/50">
          Add a pair before heading to checkout.
        </p>
        <Link
          href="/#shop"
          className="mt-7 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-bone transition hover:bg-ink/85"
        >
          Browse shoes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-5 pb-24 pt-28 sm:px-8 sm:pt-32">
      <h1 className="font-display text-[clamp(2rem,4vw,2.8rem)]">Checkout</h1>
      <p className="mt-1.5 text-[13px] text-ink/45">
        Demo store — no payment is taken, no card required.
      </p>

      <div className="mt-10 grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        {/* form */}
        <form onSubmit={submit} className="order-2 lg:order-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
            Contact &amp; delivery
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <Field
              label="Email"
              type="email"
              required
              value={form.email}
              onChange={set('email')}
              className="sm:col-span-2"
            />
            <Field
              label="Full name"
              required
              value={form.name}
              onChange={set('name')}
              className="sm:col-span-2"
            />
            <Field
              label="Address"
              required
              value={form.address}
              onChange={set('address')}
              className="sm:col-span-2"
            />
            <Field label="City" required value={form.city} onChange={set('city')} />
            <Field label="ZIP" required value={form.zip} onChange={set('zip')} />
          </div>

          <p className="mt-9 text-[11px] uppercase tracking-[0.2em] text-ink/40">
            Payment
          </p>
          <div className="mt-4 rounded-xl border border-dashed border-ink/20 bg-white/50 p-5 text-[13px] text-ink/50">
            Payment is disabled in this demo. Submitting the form simulates a
            successful order and clears your bag.
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-ink py-4.5 py-4 text-[12px] uppercase tracking-[0.2em] text-bone transition hover:bg-ink/85"
          >
            Place demo order — {formatPrice(total)}
          </button>
          <p className="mt-3 text-center text-[11px] text-ink/35">
            By placing this order you agree to absolutely nothing.
          </p>
        </form>

        {/* summary */}
        <aside className="order-1 h-fit rounded-2xl border border-ink/10 bg-white/60 p-6 lg:order-2 lg:sticky lg:top-24">
          <p className="text-[11px] uppercase tracking-[0.2em] text-ink/40">
            Order summary
          </p>
          <ul className="mt-5 space-y-4">
            {items.map((i) => (
              <li key={i.id + i.size + i.color} className="flex gap-3.5">
                <div
                  className="h-16 w-16 shrink-0 rounded-lg"
                  style={{ background: i.gradient }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-[13px] font-medium">{i.name}</p>
                  <p className="mt-0.5 text-[11px] text-ink/45">
                    {i.color} · US {i.size} · ×{i.qty}
                  </p>
                </div>
                <span className="text-[13px] tabular-nums">
                  {formatPrice(i.price * i.qty)}
                </span>
              </li>
            ))}
          </ul>

          <dl className="mt-6 space-y-2 border-t border-ink/10 pt-5 text-[13px]">
            <div className="flex justify-between text-ink/55">
              <dt>Subtotal</dt>
              <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
            </div>
            <div className="flex justify-between text-ink/55">
              <dt>Shipping</dt>
              <dd className="tabular-nums">
                {shipping === 0 ? 'Free' : formatPrice(shipping)}
              </dd>
            </div>
            <div className="flex justify-between text-ink/55">
              <dt>Tax (8%)</dt>
              <dd className="tabular-nums">{formatPrice(tax)}</dd>
            </div>
            <div className="flex justify-between border-t border-ink/10 pt-3 text-[15px] font-medium">
              <dt>Total</dt>
              <dd className="tabular-nums">{formatPrice(total)}</dd>
            </div>
          </dl>
        </aside>
      </div>
    </div>
  );
}

function Field({
  label,
  className = '',
  ...props
}: {
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={'flex flex-col gap-1.5 ' + className}>
      <span className="text-[11px] uppercase tracking-[0.14em] text-ink/45">
        {label}
      </span>
      <input
        {...props}
        className="rounded-lg border border-ink/15 bg-white px-3.5 py-2.5 text-sm outline-none transition placeholder:text-ink/25 focus:border-ink/50"
      />
    </label>
  );
}
