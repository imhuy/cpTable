/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {

      // default breakpoints but with 40px removed
      screens: {
        '2xl': '1344px',
      },
      colors: {
        'regal-pink': '#D71C5D',
        'regal-orange': '#FF9017'
      },
    },
  },
  plugins: [],
}