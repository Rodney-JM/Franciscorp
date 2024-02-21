/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {
      fontFamily:{
        montserrat: ["Montserrat", "sans-serif"],
        palanquin: ["Palanquin", "sans-serif"],
        primary:["Primary_font", "sans-serif"]
      },
      backgroundImage:{
        home_bg: "url('../src/assets/images/background.jpg')"
      }
    },
    colors:{
      cor_textos:"hsl(41, 100%, 94%)"
    }
  },
  plugins: [],
}

