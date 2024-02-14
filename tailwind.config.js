/** @type {import('tailwindcss').Config} */
import tailwindScrollBarHide from 'tailwind-scrollbar-hide';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'hero-blue': '#00D1ED',
        gray: '#787878',
      },
    },
  },
  plugins: [tailwindScrollBarHide],
};
