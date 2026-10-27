import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col items-center justify-center px-5 text-center">
      <p className="font-display text-6xl text-aura/40">404</p>
      <h1 className="mt-3 font-display text-2xl">This page took a different route</h1>
      <p className="mt-3 text-sm text-ink/50">
        The shoe or page you were looking for is not here.
      </p>
      <Link
        href="/"
        className="mt-7 rounded-full bg-ink px-7 py-3.5 text-[12px] uppercase tracking-[0.18em] text-bone transition hover:bg-ink/85"
      >
        Back to the shop
      </Link>
    </div>
  );
}
