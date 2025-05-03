/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        rose: require("tailwindcss/colors").rose,
        slate: require("tailwindcss/colors").slate,
      },
    },
  },
  plugins: [],
};
