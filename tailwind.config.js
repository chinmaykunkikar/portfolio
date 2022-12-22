/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["'Noto Sans'", ...defaultTheme.fontFamily.sans],
      mono: ["'Noto Sans Mono'", ...defaultTheme.fontFamily.mono],
    },
    fontWeight: {
      light: 300,
      normal: 400,
      // medium: 500,
      // semibold: 500,
      bold: 600,
    },
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
};
