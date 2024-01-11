/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  darkMode:'class',
  theme: {
    extend: {
      colors: {
        primaryColor: '#FFF',
        primaryColorLight: '#FFF',
        primaryColorTextLight: '#000',
        primaryColorTextDark: '#fff',
        headerColorLight: '#bfdbfe',
        headerColorDark: '#0f0096',
        secondaryColor: '#FFCC00',
        paragraphColor: '#c0c0c0',      
        whiteColor: '#fff',
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        darkColor: '#000',
        darkColorLight: "#171717",
      }
    },
  },
  plugins: [],
}

