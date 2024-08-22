/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
			colors: {
				white: 'hsl(0,0%,100%)',
        		babyBlue: 'hsl(225, 54%, 88%)',
				midnightBlue: 'hsl(220, 33%, 9%)',
				semiWhite: 'hsl(0, 0%, 100%, 0.25)',
			},
			fontFamily: {
				BarlowCondensed: [ 'Barlow Condensed', 'sans-serif' ],
				Barlow: [ 'Barlow', 'sans-serif' ],
				Bellefair: [ 'Bellefair', 'serif' ],
			}
		},
		screens: {
			xs: '480px',
			ss: '620px',
			sm: '768px',
			md: '1060px',
			lg: '1200px',
			xl: '1700px'
		}
  },
  plugins: [],
}