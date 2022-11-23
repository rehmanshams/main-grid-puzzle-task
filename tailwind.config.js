/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",   
      },
      fontFamily: {
        boldone: ["Koh Santepheap"],
        regularone: ["Koh"],
        lightone : ["kohh"]
      },
    },
  },
  plugins: [],
};
