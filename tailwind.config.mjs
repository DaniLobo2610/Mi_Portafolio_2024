/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark-blue': '#1E3A8A',
				'Light-blue':'#3B82F6',
				'grey': '#ADC2EB',
			}
		}
	},
	plugins: [],
}
