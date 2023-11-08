/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			transparent: 'transparent',
      current: 'currentColor',
			black: '#282828',
			white: '#D9D9D9',
		},
		extend: {},
	},
	plugins: [],
}
