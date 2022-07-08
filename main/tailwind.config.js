/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm' : '640px',
      'md' : '780px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1480px',
      '3xl' : '1680px',
    },
    container: {
      center: true,
      padding : '18px',
    },
    extend: {
      colors : {
        lightGreen : "#8ea73e",
        darkGreen : "#babd42",
        skinColor : "#ffef82",
        darkSkinColor : "#fefa345",
      }
    },
  },
  plugins: [],
}
