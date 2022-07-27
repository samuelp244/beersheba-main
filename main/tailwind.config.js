/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 
    "./src/**/*.{html,js,jsx}",
    './public/index.html'
  ],
  theme: {
    extend: {
      screens: {
        xs: "540px"
      }
    },
  },
  plugins: [
    
  ],
}
