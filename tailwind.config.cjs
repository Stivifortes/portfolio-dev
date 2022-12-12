/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        inter: ['inter', 'serif']
      },
      colors: {
        'primary-orange': '#FFA97A',
        'primary-black': '#182228',
        'white-bg': '#F4F5F7',
        'secondary-gray': '#293241',
        'third-gray': '#767676'
      },
      borderRadius: {
        'custom': '60px'
      }
    },
  },
  plugins: [],
}
