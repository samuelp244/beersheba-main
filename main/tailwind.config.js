/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,ts,tsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px"
      },
      fontFamily: {
        'montserrat': ['Montserrat'],
        'lato': ['Lato'],
        'garamond': ['Garamond']
    }
    },
  },
  plugins: [
    
  ],
}
