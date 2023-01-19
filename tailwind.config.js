/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#FB9300",
        secondary: "#747680",
        lightPrimary: "#FFECD1",
        lightWhite: "#FAF9FB",
        lightRed: "#FAF9FB",
        textLight: "#ebebff",
        bgLightBlue: "#3E4172",
        lightGreen: "#A0E096",
        pink: "#EC6083",
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        fira: ["Fira Sans", "sans-serif"],
      },
      backdropBlur: {
        bxs: "2px",
      },
      backgroundImage: {
        hero: "url('./bg.webp')",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
