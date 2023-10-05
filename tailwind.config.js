/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./client/**/*.{js,jsx,html}', './index.html'],
  theme: {
    container: {
      center: true
    },
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
		themes: ['fantasy'],
	},
}

