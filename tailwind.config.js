/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ['Montserrat', 'sans-serif'],
        'secondary': ['"Cormorant Garamond"', 'serif']
      },
      colors: {
        'primary': '#f78da7'
      }
    },
  },
  plugins: [require("daisyui")],
}