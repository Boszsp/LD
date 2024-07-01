// @ts-check

// 1. Import the Skeleton plugin
import flowbitePlugin from 'flowbite/plugin';
import typography from '@tailwindcss/typography';

/** @type {import('tailwindcss').Config} */
export default {
	// 2. Opt for dark mode to be handled via the class method
	darkMode: 'class',
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte-icons/**/*.{html,js,svelte,ts}'
	],
	theme: {
		extend: {
			colors: {
				text: '#0f0f14',
				background: {
					50: '#050217',
					100: '#0b042f',
					200: '#15085e',
					300: '#200c8d',
					400: '#2a10bc',
					500: '#3514eb',
					600: '#5d43ef',
					700: '#8672f3',
					800: '#aea1f7',
					900: '#d7d0fb',
					950: '#ebe8fd'
				},

				primary: {
					50: '#0b0b0f',
					100: '#17161d',
					200: '#2e2b3b',
					300: '#444158',
					400: '#5b5775',
					500: '#726c93',
					600: '#8e8aa8',
					700: '#aaa7be',
					800: '#c7c4d4',
					900: '#e3e2e9',
					950: '#f1f0f4'
				},
				secondary: '#b29eb7',
				accent: '#7f5f81'
			}
		}
	},
	plugins: [
		// 4. Append the Skeleton plugin (after other plugins)
		flowbitePlugin,
		typography
	]
};
