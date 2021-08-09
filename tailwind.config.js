// tailwind.config.js
const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ['"acumin-pro-wide"', "sans-serif"],
        body: ['"acumin-pro"', "sans-serif"],
      },
      width: {
        "32pc": "32%",
        "49pc": "49%",
        "48pc": "48%",
        "1/8": "12.5%",
        "2/8": "25%",
        "3/8": "37.5%",
        "4/8": "50%",
        "5/8": "65.8%",
        "6/8": "75%",
        "7/8": "87.5%",
      },
      colors: {
        brand: "#7364d0",
        mid: "#282a38",
        dark: "#22222b",
      },
      backgroundImage: (theme) => ({
        "header-img": "url('/bg.svg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};