/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sf-pro': ['SFPRO', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'sf-bold': ['SFPRO Bold', 'sans-serif'],
        'helvetica': ['Helvetica', 'sans-serif'],
        'international': ['NB-International', 'sans-serif'],
        'international-bold': ['NB-International-Bold', 'sans-serif'],
      },
      textColor: {
        'dialed-purple': "#AAA3FF",
      },
      backgroundColor: {
        'dialed-back': "#040316",
      },
      fontSize: {
        'huge-xl': "18rem",
        'big-xl': "14rem",
      },
      colors: {
        'dark-gray': '#333333',
      },
      keyframes: {
        "border-spin": {
          "100%": {
            transform: "rotate(-360deg)",
          },
        },
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: 1 },
          "70%": { opacity: 1 },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
        "shine-pulse": {
          "0%": { "background-position": "0% 0%" },
          "50%": { "background-position": "100% 100%" },
          to: { "background-position": "0% 0%" },
        },
        "border-beam": {
          "100%": { "offset-distance": "100%" },
        },
      },
      animation: {
        "border-spin": "border-spin 15s linear infinite",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};

