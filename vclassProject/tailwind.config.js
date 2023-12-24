/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'GOLD': '#FFB81C',
        'CRIMSON': '#A32638',
        'BLUE': '#0077C0',
        'GREY-LIGHT': '#B0B0B0',
        'GREY': '#5B5B5B',
        'ERROR': '#EA2A33',
        'INPUT-BLUE': '#004DF6',
      }
    },
  },
  plugins: [],
}