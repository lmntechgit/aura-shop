import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import { Nav } from '@/components/nav';
import { CartDrawer } from '@/components/cart-drawer';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Blaze — The style you love',
  description:
    'Streetwear printed in small batches in Johannesburg. Heavyweight cotton, boxed marks, and a red tag that does not need to shout.',
  openGraph: {
    title: 'Blaze — The style you love',
    description: 'Streetwear printed in small batches.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main"
          className="label absolute left-2 top-2 z-50 -translate-y-24 border-2 border-ink bg-ground px-3 py-2 focus:translate-y-0"
        >
          Skip to content
        </a>
        <CartProvider>
          <Nav />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
