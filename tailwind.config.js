/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster", "cursive"],
      },
      colors: {
        beer: "#D1A054",
        deepbeer: "#875F24",
        chineseBlack: "#323232",
      },
      backgroundColor: {
        beer: "#D1A054",
        deepbeer: "#875F24",
        chineseBlack: "#323232",
      },
      backgroundImage: {
        feature: "url('./src/assets/featured.jpg')",
      },
    },
  },
  daisyui: {
    themes: ["light"],
  },
  plugins: [require("daisyui")],
};
