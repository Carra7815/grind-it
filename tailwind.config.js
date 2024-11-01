/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
import colors from "./src/data/colors.js";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: colors.default.primary,
      secondary: colors.default.secondary,
      tertiary: colors.default.tertiary,
      quaternary: colors.default.quaternary,
    },
    fontFamily: {
      sans: ["InterVariable"],
      dongle: ["Dongle", "sans-serif"],
    },
  },
  plugins: [require("tailwindcss-react-aria-components")],
};
