/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			colorOne: "#B2A4FF",
			colorTwo: "#FFB4B4",
			colorTree: "#FFDEB4",
			colorFour: "#FDF7C3",
			colorFive: "#2C3333",
			colorSix: "'#273444'",
			colorSeven: "#8492a6",
			colorEight: "#d3dce6",
			colorNine: "#FFF4F4",
			colorTen: "#d10000",
		},
		extend: {
			fontFamily: {
				playfair: ["Playfair Display", "serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [],
};
