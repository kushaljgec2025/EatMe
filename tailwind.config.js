/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light": "var(--1st-color)",
        "mid": "var(--2nd-color)",
        "deep": "var(--3rd-color)",

      },


    },
  },
  plugins: [],
}
