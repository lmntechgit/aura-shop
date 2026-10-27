import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="grid-page py-16">
      <div className="col-span-6 md:col-span-3">
        <p className="label text-accent">404</p>
        <h1 className="display mt-3 text-[clamp(32px,5vw,64px)]">Not here.</h1>
      </div>
      <div className="col-span-6 mt-6 md:col-span-9 md:mt-0">
        <p className="text-lead text-[#333]">
          This page does not exist. The range does.
        </p>
        <Link href="/#shop" className="btn mt-6">Shop the range</Link>
      </div>
    </section>
  );
}
