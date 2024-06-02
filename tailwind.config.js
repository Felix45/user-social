/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dist: '#c32248',
      },
      boxShadow: {
        '2xl': '0 2px 5px 0 #ddd, 0 2px 10px 0 #ddd',
      },
    },
  },
  plugins: [],
};
