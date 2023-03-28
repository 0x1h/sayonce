/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {

    },
    colors: {
      "background": "#181818",
      transparent: "transparent"
    },
    screens: {
      "app-max-width-extra-small": { max: "479px" },
      "app-max-width-small": { max: "768px" },
      "app-max-width-medium": { max: "1024px" },
      "app-max-width-large": { max: "1600px" },
    }
  },
  plugins: [],
};

module.exports = config;
