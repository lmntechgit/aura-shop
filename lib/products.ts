export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  colorway: string;
  colors: { name: string; hex: string }[];
  sizes: string[];
  badge?: string;
  featured?: boolean;
  description: string;
  features: string[];
  images: { src: string; alt: string }[];
  rating: number;
  reviews: number;
};

const img = (file: string) => '/images/' + file;

export const products: Product[] = [
  {
    id: 'blz-01',
    slug: 'blaze-core-tee-black',
    name: 'Blaze Core Tee',
    tagline: 'Heavyweight cotton, red mark',
    price: 420,
    compareAt: 520,
    colorway: 'Black',
    colors: [{ name: 'Black', hex: '#111111' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    badge: 'Best Seller',
    featured: true,
    description:
      'The Core Tee is the piece the rest of the range is built around. Heavyweight cotton, a boxed chest mark and the South Africa tag cut in red — nothing printed that does not need to be there.',
    features: [
      '100% heavyweight combed cotton',
      'Boxed Blaze chest mark',
      'Ribbed crew neck, taped seams',
      'Cold wash, inside out',
    ],
    images: [
      { src: img('IMG-20261027-WA0051.jpg'), alt: 'Blaze Core Tee in black, flat product shot showing the red boxed chest mark' },
      { src: img('IMG-20261027-WA0046.jpg'), alt: 'Model wearing a black oversized Blaze tee on an outdoor court' },
      { src: img('IMG-20261027-WA0052.jpg'), alt: 'Two tees on a print-shop workbench during heat transfer' },
    ],
    rating: 4.8,
    reviews: 412,
  },
  {
    id: 'blz-02',
    slug: 'blaze-script-tee-brown',
    name: 'Blaze Script Tee',
    tagline: 'Chocolate brown, script wordmark',
    price: 460,
    colorway: 'Chocolate',
    colors: [{ name: 'Chocolate', hex: '#4A342A' }],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'New',
    description:
      'A softer counterpart to the Core Tee. Garment-dyed chocolate cotton with the wordmark stacked over the script line — the one we wear when we are not working.',
    features: [
      'Garment-dyed cotton jersey',
      'Script wordmark print',
      'Relaxed shoulder',
      'Colour softens with each wash',
    ],
    images: [
      { src: img('IMG-20261027-WA0048.jpg'), alt: 'Blaze Script Tee in chocolate brown, flat product shot with white script wordmark' },
      { src: img('IMG-20261027-WA0043.jpg'), alt: 'Model in a black Blaze tee photographed inside a glass-fronted building' },
      { src: img('IMG-20261027-WA0055.jpg'), alt: 'Model in a white Blaze tee seated outdoors by a waterfall cliff' },
    ],
    rating: 4.7,
    reviews: 189,
  },
  {
    id: 'blz-03',
    slug: 'blaze-mosque-back-tee',
    name: 'Blaze Back-Print Tee',
    tagline: 'Full-back illustration',
    price: 520,
    colorway: 'White',
    colors: [{ name: 'White', hex: '#F5F5F5' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The full back carries everything: the mosque illustration framed in leaves and flowers, the pixel glyphs beneath it. The front stays plain, which is the whole point.',
    features: [
      'Oversized fit, dropped shoulder',
      'Full-back screen print, six colours',
      'Plain front panel',
      'Printed in small batches',
    ],
    images: [
      { src: img('IMG-20261027-WA0056.jpg'), alt: 'Model shot from behind wearing the white Blaze back-print tee with mosque illustration' },
      { src: img('IMG-20261027-WA0054.jpg'), alt: 'Model from behind in an oversized black Blaze tee with white floral back print and brand text' },
      { src: img('IMG-20261027-WA0049.jpg'), alt: 'Two models in Blaze tees on a trampoline, one black and one graphic white' },
      { src: img('IMG-20261027-WA0047.jpg'), alt: 'Model in a white oversized Blaze tee holding a football in front of a goal net' },
      { src: img('IMG-20261027-WA0050.jpg'), alt: 'Model in a white Blaze graphic tee with a sneaker print, standing in a sunlit yard' },
    ],
    rating: 4.9,
    reviews: 264,
  },
  {
    id: 'blz-04',
    slug: 'blaze-bucket-hat-black',
    name: 'Blaze Bucket Hat — Black',
    tagline: 'All-over B-mark',
    price: 260,
    colorway: 'Black',
    colors: [{ name: 'Black', hex: '#111111' }],
    sizes: ['S/M', 'L/XL'],
    description:
      'All-over B-mark print with the wordmark and strap. Packable, unlined, and the closest thing in the range to a uniform. Shown here in black with a white mark.',
    features: [
      'All-over printed cotton twill',
      'Wordmark chin strap',
      'Unlined, packable',
      'Black with white mark',
    ],
    images: [
      { src: img('IMG-20261027-WA0053.jpg'), alt: 'Three Blaze bucket hats in black, white and green on a white background' },
      { src: img('IMG-20261027-WA0045.jpg'), alt: 'Model wearing the black Blaze bucket hat in a modern kitchen' },
    ],
    rating: 4.6,
    reviews: 187,
  },
  {
    id: 'blz-07',
    slug: 'blaze-sneaker-graphic-tee',
    name: 'Blaze Sneaker Graphic Tee',
    tagline: 'Sneaker print, white',
    price: 440,
    colorway: 'White',
    colors: [{ name: 'White', hex: '#F5F5F5' }],
    sizes: ['S', 'M', 'L', 'XL'],
    badge: 'New',
    description:
      'A white tee carrying a single printed high-top on the chest — blue, black and yellow across a camo upper. The graphic does the talking, everything else stays plain.',
    features: [
      'Cotton jersey, white',
      'Single sneaker chest print',
      'Relaxed shoulder',
      'Printed in small batches',
    ],
    images: [
      { src: img('IMG-20261027-WA0050.jpg'), alt: 'Model in a white Blaze graphic tee with a sneaker print, standing in a sunlit yard' },
      { src: img('IMG-20261027-WA0049.jpg'), alt: 'Two models in Blaze tees on a trampoline, one graphic white' },
      { src: img('IMG-20261027-WA0043.jpg'), alt: 'Model in a black Blaze tee inside a glass-fronted building' },
    ],
    rating: 4.7,
    reviews: 143,
  },
  {
    id: 'blz-08',
    slug: 'blaze-floral-back-tee',
    name: 'Blaze Floral Back Tee',
    tagline: 'Black, floral back print',
    price: 500,
    colorway: 'Black',
    colors: [{ name: 'Black', hex: '#111111' }],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    description:
      'The black counterpart to the mosque back print. A single white flower sits under the wordmark, with the brand text set above it. Plain front, oversized cut.',
    features: [
      'Oversized fit, dropped shoulder',
      'White floral back print',
      'Plain front panel',
      'Wordmark set above the graphic',
    ],
    images: [
      { src: img('IMG-20261027-WA0054.jpg'), alt: 'Model from behind in an oversized black Blaze tee with white floral back print and brand text' },
      { src: img('IMG-20261027-WA0046.jpg'), alt: 'Two models in oversized Blaze tees on an outdoor sports court' },
      { src: img('IMG-20261027-WA0052.jpg'), alt: 'Hands positioning a Blaze tee on a wooden workbench beside transfer sheets' },
    ],
    rating: 4.8,
    reviews: 208,
  },
  {
    id: 'blz-09',
    slug: 'blaze-court-tee',
    name: 'Blaze Court Tee',
    tagline: 'Green and red mark on white',
    price: 430,
    colorway: 'White',
    colors: [{ name: 'White', hex: '#F5F5F5' }],
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'White oversized tee with the mark printed in green and red across the chest. Cut long, worn loose. The one that shows up most in the photos because it is the one we reach for.',
    features: [
      'White oversized cotton tee',
      'Green and red chest mark',
      'Long body, dropped shoulder',
      'Printed in small batches',
    ],
    images: [
      { src: img('IMG-20261027-WA0047.jpg'), alt: 'Model in a white oversized Blaze tee holding a football in front of a goal net' },
      { src: img('IMG-20261027-WA0046.jpg'), alt: 'Two models in oversized Blaze tees on an outdoor sports court' },
      { src: img('IMG-20261027-WA0050.jpg'), alt: 'Model in a white Blaze graphic tee in a sunlit yard' },
    ],
    rating: 4.6,
    reviews: 122,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(amount: number): string {
  return 'R' + amount.toFixed(0);
}

/** Editorial imagery used on the home page, mapped to real photographs. */
export const editorial = [
  {
    src: img('IMG-20261027-WA0045.jpg'),
    alt: 'Two models wearing Blaze apparel in a modern kitchen, one in a black bucket hat',
    caption: 'Studio visit — kitchen set',
  },
  {
    src: img('IMG-20261027-WA0046.jpg'),
    alt: 'Two models in oversized Blaze tees on an outdoor sports court',
    caption: 'Court, midday',
  },
  {
    src: img('IMG-20261027-WA0052.jpg'),
    alt: 'Hands positioning a Blaze tee on a wooden workbench beside transfer sheets',
    caption: 'Heat press, unit 4',
  },
];
