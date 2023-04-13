/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        moresale: "url('./src/assets/masvendido.jpg')",
        belleza: "url('./src/assets/10.jpg')",
      },
    },
  },
  plugins: [],
};
