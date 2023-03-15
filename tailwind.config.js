/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx,html}"],
    mode:"jit",
    theme: {
      extend: {
        colors: {
          "deep-blue": "#010026",
          blue: "#2CBCE9",
          red: "#DC4492",
          yellow: "#FDCC49",
          grey: "#ededed",
          "dark-grey": "#757575",
          "opaque-black": "rgba(0,0,0,0.35)",
        },
        boxShadow:{
           shadow: "rgba(17, 12, 46, 0.15) 0px 48px 100px 0px"
        },
        backgroundImage: (theme) => ({
          "gradient-rainbow":
            "linear-gradient(81.66deg, #00B5EE 7.21%, #FF45A4 45.05%, #FFBA00 78.07%)",
  
          "gradient-rainblue":
            "linear-gradient(90deg, #24CBFF 14.53%, #FC59FF 69.36%, #FFBD0C 117.73%)",
        }),
        fontFamily: {
          playfair: ["Playfair Display", "serif"],
          opensans: ["Open Sans", "sans-serif"],
          comfort:["Comfortaa", "cursive"]
        },
        content: {
          brush: "url('./assets/brush.png')",
          person1: "url('./assets/person-1.png')",
          person2: "url('./assets/person-2.png')",
          person3: "url('./assets/person-3.png')",
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