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
      }
    },
  },
  plugins: [
    
  ],
}
