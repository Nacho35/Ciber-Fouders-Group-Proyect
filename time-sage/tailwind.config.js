/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			colorOne: "#9381FF",
			colorTwo: "#BDE0FE",
			colorTree: "#FFD6FF",
			colorFour: "#68D8D6",
			colorFive: "#E9ECEF",
			colorSix: "#383838",
			colorSeven: "#9D9D9D",
			colorEight: "#CED4DA",
			colorNine: "#d10000",
		},
		extend: {
			fontFamily: {
				Poppins: ["Poppins", "sans-serif"],
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("daisyui")],
};
