/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        Rye : ["Rye", "cursive"],
        Rubik : ['Rubik Dirt', 'cursive'],
      },
    },
  },
  plugins: [],
}
