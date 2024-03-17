/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
    fontFamily:{
      lexend: ["lexend", 'sans-serif'],
      firaSans: ['fira-sans', 'sans-serif'] 
    },
    colors:{
      'theme': "#0BE58A",
    },
		extend: {
      backgroundImage: {
        'banner-pattern': "url('./Rectangle 1.png')"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        stone: colors.warmGray,
        sky: colors.lightBlue,
        neutral: colors.trueGray,
        gray: colors.coolGray,
        slate: colors.blueGray,
    },
    },
	},
	plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  }
};
