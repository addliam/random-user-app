/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/**/*.{html,ts}",    
  ],
  theme: {
    extend: {
      colors: {
        orange: "#fb8500",
        orangeContrast: "#F48100",
        yellow: "#ffb703",
        darkBlue: "#023047",
        turquoise: "#219ebc",
        skyBlue: "#8ecae6",
        lightBlue: "#caf0f8",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}