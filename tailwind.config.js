/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors:{
				"primary": "#6156f9",
				"secondary": "#a69efaa4",
				"pink": "#ed358d"
			}
		},
  },
  plugins: [],
}