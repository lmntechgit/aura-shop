'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useCart } from '@/lib/cart';
import { formatPrice } from '@/lib/products';

export default function CheckoutPage() {
  const { items, subtotal, count, clear } = useCart();
  const [step, setStep] = useState<'form' | 'done'>('form');
  const [orderNo] = useState(() => 'BLZ-' + Math.random().toString(36).slice(2, 8).toUpperCase());
  const [form, setForm] = useState({ email: '', name: '', address: '', city: '', zip: '' });

  const shipping = subtotal >= 800 || subtotal === 0 ? 0 : 80;
  const total = subtotal + shipping;

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [k]: e.target.value });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('done');
    clear();
  };

  if (step === 'done') {
    return (
      <section className="grid-page py-16">
        <div className="col-span-6 md:col-span-3">
          <p className="label text-accent">Order placed</p>
          <h1 className="display mt-3 text-[clamp(32px,5vw,64px)]">Thank you.</h1>
        </div>
        <div className="col-span-6 mt-6 md:col-span-9 md:mt-0 md:max-w-[46ch]">
          <p className="text-lead text-[#333]">
            This is a demonstration store, so no payment was taken and no order
            will ship.
          </p>
          <p className="mt-5 border-2 border-ink px-3 py-2 label tabular-nums">
            {orderNo}
          </p>
          <Link href="/#shop" className="btn mt-6">Back to the range</Link>
        </div>
      </section>
    );
  }

  if (count === 0) {
    return (
      <section className="grid-page py-16">
        <div className="col-span-6 md:col-span-3">
          <p className="label text-[#6b6b6b]">Checkout</p>
          <h1 className="display mt-3 text-[clamp(32px,5vw,64px)]">Empty bag.</h1>
        </div>
        <div className="col-span-6 mt-6 md:col-span-9 md:mt-0">
          <p className="text-lead text-[#333]">Add a piece before checking out.</p>
          <Link href="/#shop" className="btn mt-6">Shop the range</Link>
        </div>
      </section>
    );
  }

  return (
    <section className="grid-page py-8 md:py-12">
      <div className="col-span-6 md:col-span-7">
        <p className="label text-[#6b6b6b]">Checkout</p>
        <h1 className="display mt-3 text-[clamp(32px,4vw,56px)]">Details.</h1>
        <p className="mt-3 text-meta text-[#555]">
          Demonstration store — no payment is taken, no card required.
        </p>

        <form onSubmit={submit} className="mt-8">
          <h2 className="label border-t-2 border-ink pt-3 text-[#6b6b6b]">
            Contact &amp; delivery
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            <Field label="Email" type="email" required value={form.email} onChange={set('email')} className="sm:col-span-2" />
            <Field label="Full name" required value={form.name} onChange={set('name')} className="sm:col-span-2" />
            <Field label="Address" required value={form.address} onChange={set('address')} className="sm:col-span-2" />
            <Field label="City" required value={form.city} onChange={set('city')} />
            <Field label="Postal code" required value={form.zip} onChange={set('zip')} />
          </div>

          <h2 className="mt-8 label border-t-2 border-ink pt-3 text-[#6b6b6b]">Payment</h2>
          <p className="mt-3 border-2 border-dashed border-ink/40 p-4 text-meta text-[#555]">
            Payment is disabled in this demonstration. Submitting simulates a
            successful order and clears your bag.
          </p>

          <button type="submit" className="btn mt-6 w-full">
            Place demo order — {formatPrice(total)}
          </button>
        </form>
      </div>

      <aside className="col-span-6 mt-10 md:col-span-5 md:mt-0 md:border-l-2 md:border-ink md:pl-6">
        <h2 className="label border-t-2 border-ink pt-3 text-[#6b6b6b]">Order</h2>
        <ul className="mt-3">
          {items.map((i) => (
            <li
              key={i.id + i.size + i.color}
              className="flex gap-3 border-b border-ink/20 py-3"
            >
              <div className="h-20 w-16 shrink-0 border-2 border-ink bg-surface">
                <Image
                  src={i.image}
                  alt=""
                  width={160}
                  height={200}
                  className="h-full w-full object-cover grayscale"
                />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-meta font-strong">{i.name}</p>
                <p className="label text-[#6b6b6b]">
                  {i.color} · {i.size} · ×{i.qty}
                </p>
              </div>
              <span className="text-meta tabular-nums">{formatPrice(i.price * i.qty)}</span>
            </li>
          ))}
        </ul>

        <dl className="mt-4 space-y-1.5 text-meta">
          <div className="flex justify-between">
            <dt className="text-[#555]">Subtotal</dt>
            <dd className="tabular-nums">{formatPrice(subtotal)}</dd>
          </div>
          <div className="flex justify-between">
            <dt className="text-[#555]">Shipping</dt>
            <dd className="tabular-nums">{shipping === 0 ? 'Free' : formatPrice(shipping)}</dd>
          </div>
          <div className="flex justify-between border-t-2 border-ink pt-2 text-[17px] font-strong">
            <dt>Total</dt>
            <dd className="tabular-nums">{formatPrice(total)}</dd>
          </div>
        </dl>
      </aside>
    </section>
  );
}

function Field({
  label,
  className = '',
  ...props
}: { label: string; className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className={'flex flex-col gap-1 ' + className}>
      <span className="label text-[#6b6b6b]">{label}</span>
      <input {...props} className="field" />
    </label>
  );
}
