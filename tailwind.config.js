/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      colors: {
        primary: "#F3283C",
      },
      backgroundImage: {
        banner: "url('./images/banner.jpg')",
      },
      margin: ["hover"],
    },
  },
  plugins: [],
};
