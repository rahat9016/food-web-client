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
      },
      fontFamily: {
        lato: ["Lato", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      backdropBlur: {
        bxs: "2px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/Images/bg.webp')",
      },
    },
  },
  plugins: [],
};
