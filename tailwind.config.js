/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ground: '#ffffff',
        ink: '#000000',
        surface: '#f0f0f0',
        accent: '#c90000',
      },
      fontFamily: {
        sans: ['var(--dp-typography-face)'],
      },
      fontSize: {
        label: ['12px', { lineHeight: '1.5', letterSpacing: '0.12em' }],
        meta: ['14px', { lineHeight: '1.5' }],
        body: ['16px', { lineHeight: '1.5' }],
        lead: ['17px', { lineHeight: '1.5' }],
        item: ['24px', { lineHeight: '1.2' }],
      },
      fontWeight: {
        regular: '400',
        strong: '700',
        display: '750',
      },
      spacing: {
        gutter: 'var(--dp-spacing-gutter)',
      },
      borderWidth: {
        rule: '2px',
      },
      borderRadius: {
        control: '0',
      },
    },
  },
  plugins: [],
};
