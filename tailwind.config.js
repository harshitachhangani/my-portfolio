/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  variants: {
    extend: {
      fontWeight: ["responsive", "hover", "focus"],
      opacity: ["hover"],
      borderColor: ["hover", "focus"],
      margin: ["first", "last"],
      backgroundColor: ["odd", "even"],
      scale: ["hover", "active", "group-hover"],
    },
  },
 
  
  theme: {
    extend: {
      colors:{
        'neutralSilver':'#F5F7FA',
        'neutralDGRAY':'#4D4D4D',
        'brandPrimary':'#4CAF4F',
        'neutralGrey':'#717171',
      }
    },
    fontFamily: {
      signature: ["Great Vibes"],
      main :["Mochiy Pop One"]
    },

  },
  plugins: [],
}


