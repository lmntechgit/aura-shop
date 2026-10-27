export type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  colorway: string;
  colors: { name: string; hex: string }[];
  sizes: number[];
  badge?: string;
  description: string;
  features: string[];
  /** CSS gradient used as the product visual */
  gradient: string;
  accent: string;
  rating: number;
  reviews: number;
};

export const products: Product[] = [
  {
    id: 'aura-01',
    slug: 'aura-glide',
    name: 'Aura Glide',
    tagline: 'Weightless daily trainer',
    price: 180,
    compareAt: 220,
    colorway: 'Bone / Gold',
    colors: [
      { name: 'Bone', hex: '#F7F5F2' },
      { name: 'Onyx', hex: '#0B0B0F' },
      { name: 'Sand', hex: '#C6A664' },
    ],
    sizes: [7, 8, 9, 10, 11, 12],
    badge: 'Best Seller',
    description:
      'The Glide is engineered for the miles you forget you ran. A single-piece knit upper wraps the foot without pressure, while the AuraFoam midsole returns energy with every stride.',
    features: [
      'AuraFoam™ nitrogen-infused midsole',
      'Seamless single-knit upper',
      'Recycled ocean-bound yarn',
      '236g (size 9)',
    ],
    gradient: 'linear-gradient(145deg, #F7F5F2 0%, #E8E2D8 45%, #C6A664 100%)',
    accent: '#C6A664',
    rating: 4.8,
    reviews: 412,
  },
  {
    id: 'aura-02',
    slug: 'aura-eclipse',
    name: 'Aura Eclipse',
    tagline: 'Night-run silhouette',
    price: 210,
    colorway: 'Onyx / Graphite',
    colors: [
      { name: 'Onyx', hex: '#0B0B0F' },
      { name: 'Graphite', hex: '#3A3A42' },
    ],
    sizes: [7, 8, 9, 10, 11, 12, 13],
    badge: 'New',
    description:
      'Built for the hours after dark. Reflective filament is woven directly into the upper, so the Eclipse catches light from every angle without a single glued-on strip.',
    features: [
      'Woven reflective filament upper',
      'Carbon-plate propulsion layer',
      'Glow-line outsole detailing',
      '228g (size 9)',
    ],
    gradient: 'linear-gradient(145deg, #2A2A32 0%, #0B0B0F 55%, #43434D 100%)',
    accent: '#8B8B99',
    rating: 4.9,
    reviews: 189,
  },
  {
    id: 'aura-03',
    slug: 'aura-terra',
    name: 'Aura Terra',
    tagline: 'Trail-ready grip',
    price: 195,
    colorway: 'Clay / Moss',
    colors: [
      { name: 'Clay', hex: '#A9714B' },
      { name: 'Moss', hex: '#5A6B4F' },
    ],
    sizes: [8, 9, 10, 11, 12],
    description:
      'Four-millimeter lugs, a rock plate that shrugs off scree, and a water-shedding upper. The Terra is the shoe you reach for when the trail turns hostile.',
    features: [
      '4mm multi-directional lugs',
      'Forefoot rock plate',
      'DWR-treated ripstop upper',
      '284g (size 9)',
    ],
    gradient: 'linear-gradient(145deg, #6B7A5A 0%, #A9714B 55%, #4A3B2E 100%)',
    accent: '#7D8C63',
    rating: 4.7,
    reviews: 264,
  },
  {
    id: 'aura-04',
    slug: 'aura-halo',
    name: 'Aura Halo',
    tagline: 'Recovery slide',
    price: 95,
    colorway: 'Cloud / Cream',
    colors: [
      { name: 'Cloud', hex: '#EDEAE4' },
      { name: 'Cream', hex: '#D9CFBC' },
    ],
    sizes: [6, 7, 8, 9, 10, 11, 12],
    description:
      'A post-run slide with the same foam that made the Glide famous. Molded arch support, a soft heel cradle, and nothing else you do not need.',
    features: [
      'AuraFoam™ footbed',
      'Molded arch support',
      'Machine washable',
      '148g (size 9)',
    ],
    gradient: 'linear-gradient(145deg, #FFFFFF 0%, #EDEAE4 45%, #CFC4B0 100%)',
    accent: '#B8AC95',
    rating: 4.6,
    reviews: 331,
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(cents: number): string {
  return '$' + cents.toFixed(0);
}
