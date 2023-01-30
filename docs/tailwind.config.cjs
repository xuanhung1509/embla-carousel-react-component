/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      screens: {
        xl: '1024px',
        '2xl': '1024px',
      },
    },
  },
  plugins: [],
};
