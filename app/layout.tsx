import type { Metadata } from 'next';
import './globals.css';
import { CartProvider } from '@/lib/cart';
import { Nav } from '@/components/nav';
import { CartDrawer } from '@/components/cart-drawer';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'Aura — Footwear engineered for lightness',
  description:
    'Aura builds performance footwear with a single obsession: making the shoe disappear. Shop the Glide, Eclipse, Terra and Halo.',
  openGraph: {
    title: 'Aura — Footwear engineered for lightness',
    description: 'Performance footwear engineered to disappear on foot.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <CartProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
