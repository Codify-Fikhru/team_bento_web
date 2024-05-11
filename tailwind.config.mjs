/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		fontFamily: {
			heading: ["Kanit", "sans-serif"],
			body: ["Lato", "sans-serif"],
		},
		colors: {
			transparent: "transparent",
			light: "#ebebed",
			dark: "#050507",

			bg: {
				200: "#858592",
				300: "#5d5d6e",
				400: "#34344a",
				500: "#2a2a3b",
				600: "#1f1f2c",
			},
			primary: {
				200: "#e8789d",
				300: "#e04b7c",
				400: "#d81e5b",
				500: "#ad1849",
				600: "#821237",
			},
		},
	},
	plugins: [],
}
