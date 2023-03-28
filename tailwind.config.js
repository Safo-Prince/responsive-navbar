/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {},
    screens: {
      desktop: { max: "1280px" },
      laptop: { max: "1024px" },
      tablet: { max: "768px" },
      mobile: { max: "480px" },
    },
  },
  plugins: [],
};
