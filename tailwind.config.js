/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
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
      extrabold: 700,
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
      backgroundImage: {
        "static-map": `url("https://api.mapbox.com/styles/v1/chinmaykunkikar/clc3j5l73005k14mpx2ghpj5x/static/${process.env.NEXT_PUBLIC_MAP_LONGITUDE},${process.env.NEXT_PUBLIC_MAP_LATITUDE},13,0,40/264x256@2x?access_token=${process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN}&attribution=false&logo=false")`,
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatible: true })],
};
