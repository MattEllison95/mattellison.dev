/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyColor: '#020617'
      },
      fontFamily: {
        display: 'Roboto, system-ui, Avenir, Helvetica, Arial, sans-serif'
      },
    },
  },
  plugins: [],
}