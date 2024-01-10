/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'accent-1': '#2AB3B1',
				'accent-2': '#C0DF33',
				'muted' : '#9AA7BE',
			},
			boxShadow: {
				'card': '0px 15px 30px 0px rgba(0, 81, 171, 0.15)',
				'btn' : '0px 10px 10px 0px rgba(0, 0, 0, 0.10)',
			},
		},
	},
	plugins: [],
}
