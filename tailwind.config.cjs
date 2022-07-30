/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        primary: "#FFDCB7",
        secondary: "#FFF2E2",
        tertiary: "#FFC68A",
        darkBackground: "#121212",
        darkText: "#41414D",
        lightText: "#fff"
      },
      fontFamily: {
        "poppins": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}
