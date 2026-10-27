/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0B0B0F',
        bone: '#F7F5F2',
        aura: {
          DEFAULT: '#C6A664',
          light: '#E2CFA4',
          dark: '#9C7F42',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
    },
  },
  plugins: [],
};
