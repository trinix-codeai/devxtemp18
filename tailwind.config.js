/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#1B4332',
        tan: '#D4A96A',
        charcoal: '#1C1C1C',
        sand: '#F5F0E8',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        serif: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        card: '0 18px 55px rgba(28, 28, 28, 0.08)',
      },
      backgroundImage: {
        'grain-gradient':
          'radial-gradient(circle at top, rgba(212, 169, 106, 0.16), transparent 40%), linear-gradient(135deg, rgba(27, 67, 50, 0.96), rgba(28, 28, 28, 0.92))',
      },
    },
  },
  plugins: [],
};
