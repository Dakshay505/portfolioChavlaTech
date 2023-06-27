/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        "primary-green": "#8DE29E",
        "primary-light": "#F2F2F2",
        "primary-dark": "#060719",
      }
    },
  },
  plugins: [],
}