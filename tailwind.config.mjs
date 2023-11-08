/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
			black: '#051014',
			white: '#D9D9D9',
			grey: '#5F5B6B',
			blue: '#4D7EA8',
		},
		extend: {},
	},
	plugins: [],
}
