import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-ink text-ground">
      <div className="grid-page py-14">
        <div className="col-span-6 md:col-span-3">
          <p className="text-[15px] font-display uppercase tracking-[-0.02em]">
            BLAZE
          </p>
          <p className="mt-3 max-w-[26ch] text-meta text-ground/60">
            The style you love. Printed in small batches.
          </p>
        </div>

        <div className="footer-groups col-span-6 mt-10 grid grid-cols-2 gap-6 md:col-span-6 md:mt-0 md:grid-cols-3">
          <div>
            <p className="label text-ground/50">Shop</p>
            <ul className="mt-3 space-y-2 text-meta text-ground/75">
              <li>
                <Link href="/#shop" className="hover:text-accent">
                  All pieces
                </Link>
              </li>
              <li>
                <Link href="/product/blaze-core-tee-black" className="hover:text-accent">
                  Core Tee
                </Link>
              </li>
              <li>
                <Link href="/product/blaze-bucket-hat-black" className="hover:text-accent">
                  Bucket Hat
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-ground/50">Company</p>
            <ul className="mt-3 space-y-2 text-meta text-ground/75">
              <li>
                <Link href="/#story" className="hover:text-accent">
                  Story
                </Link>
              </li>
              <li>
                <Link href="/#range" className="hover:text-accent">
                  Range
                </Link>
              </li>
              <li>
                <Link href="/checkout" className="hover:text-accent">
                  Checkout
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="label text-ground/50">Notice</p>
            <p className="mt-3 text-meta text-ground/60">
              Demonstration store. No payments are taken.
            </p>
          </div>
        </div>

        <div className="col-span-6 mt-12 border-t-2 border-ground/30 pt-5 md:col-span-12">
          <div className="flex flex-col justify-between gap-2 text-meta text-ground/45 sm:flex-row">
            <p>© {new Date().getFullYear()} Blaze</p>
            <p>Deployed on Dokploy</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
