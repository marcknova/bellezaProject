/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        moresale: "url('./src/assets/masvendido.jpg')",
        belleza:
          "url('https://images.pexels.com/photos/1749452/pexels-photo-1749452.jpeg')",
        belleza1: "url('./src/assets/img1-1.jpg')",
      },
    },
  },
  plugins: [],
};
