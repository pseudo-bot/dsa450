module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class', // or 'media' or 'class'
	theme: {
		extend: {
			backgroundImage: {
				'sun': "url('/assets/sun.png')",
				'moon': "url('/assets/moon.png')"
			}
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
