/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
    	colors: {
	      transparent: 'transparent',
	      current: 'currentColor',
	      black: colors.black,
	      white: colors.white,
	      gray: colors.neutral,
	      indigo: colors.indigo,
	      red: colors.rose,
	      yellow: colors.amber,
    	}
    },
  },
  plugins: [],
}
