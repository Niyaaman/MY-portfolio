/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        'regal-blue': '#243c5a',
        'shod':'[5px_5px_20px_rgba(6,182,212,0.5),_-5px_-5px_20px_rgba(217,70,239,0.5)]',
        'orangcl':'rgb(227, 212, 80)'
      },
      fontFamily: {
        // This creates a custom class named 'font-lobster'
        lobster: ['"Lobster Two"', 'cursive'], 
      },


    },
  },
  plugins: [],
}

