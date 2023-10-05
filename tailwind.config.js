/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.{html,js}'],
  theme: {
    extend: {fontFamily: {
      Halant: ['Halant ', 'serif'],
      Nunito :['Nunito Sans', 'sans-serif']
    }},
  },
  plugins: [],
}

