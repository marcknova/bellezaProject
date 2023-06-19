/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        moresale: "url('./src/assets/masvendido.jpg')",
        belleza: "url('./src/assets/101.jpg')",
        belleza1: "url('./src/assets/img1-1.jpg')",
      },
    },
  },
  plugins: [],
};
