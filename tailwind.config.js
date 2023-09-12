/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
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
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
      colors: {
        "social-github": "#211f1f",
        "social-linkedin": "#0a66c2",
        "social-twitter": "#1da1f2",
        spotify: "#00da5a",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
