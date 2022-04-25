const plugin = require("tailwindcss/plugin");

module.exports = {
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		screens: {
			tablet: "640px",
			// => @media (min-width: 640px) { ... }

			laptop: "1024px",
			// => @media (min-width: 1024px) { ... }

			desktop: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
		extend: {
			colors: {
				// https://colorhunt.co/palette/0000005800ffe900ffffc600
				white: "white",
				black: "black",
				none: "none",
				purple: "#5800FF",
				pink: "#E900FF",
				yellow: "#FFC600",
			},
			fontFamily: {
				quicksand: ["Quicksand", "Roboto-Mono"],
			},
		},
		borderWidth: {
			1: "1px",
		},
		gridTemplateRows: {
			7: "repeat(7, minmax(0, 1fr))",
			8: "repeat(8, minmax(0, 1fr))",
		},
		// grid templace tailwind only goes to 6 rows
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
