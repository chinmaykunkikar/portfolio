/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontWeight: {
      light: 300,
      normal: 400,
      bold: 600,
      extrabold: 700,
    },
    fontFamily: {
      sans: ["var(--font-manrope)"],
      mono: ["var(--font-roboto-mono)"],
      newsreader: ["var(--font-newsreader)"],
    },
    extend: {
      colors: {
        type: {
          DEFAULT: colors.neutral[600],
          hover: colors.neutral[500],
          light: colors.neutral[400],
        },
        brand: {
          github: "#211f1f",
          linkedin: "#0a66c2",
          spotify: "#1db954",
          twitter: "#000000",
        },
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
