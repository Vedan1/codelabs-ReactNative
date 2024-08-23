/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
         primary: {
          100: "#5ea25f",
          200: "#d5715b",
          300: "#f8c569",
        },
        black: {
          DEFAULT: "#261c12",
        },
        white:{
          DEFAULT: "#fff",
          100: "#e9e9e9",
        },
        gray: {
          100: "#CDCDE0",
        },
    },
  },
  },
  plugins: [],
}

