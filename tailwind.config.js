/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: { DEFAULT: '#1e3a2b', deep: '#122319', soft: '#2e5340' },
        cream: '#f8f4ec',
        sand: '#efe6d4',
        mint: '#e8efe8',
        gold: { DEFAULT: '#b8924a', light: '#d8b979' },
        ink: '#1c211e',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: { widest2: '0.22em' },
    },
  },
  plugins: [],
};
