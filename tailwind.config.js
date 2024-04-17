const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      trueGray: colors.neutral, // Existing customization
      paleOrange: {
        50: '#fdf5ef',  // Lightest
        100: '#fae6d9',
        200: '#f5d3b9',
        300: '#f0bf99',
        400: '#ebac79',
        500: '#dfaf8f',  // Base color
        600: '#d59a65',
        700: '#c7874b',
        800: '#b87331',
        900: '#a35f17',  // Darkest
      }
    },
    fontFamily: {
      sans: ["Inter", ...defaultTheme.fontFamily.sans],
      stock: [defaultTheme.fontFamily.sans],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
