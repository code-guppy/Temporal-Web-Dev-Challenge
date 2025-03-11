// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	compatibilityDate: '2025-03-04',
	devtools: { enabled: true },
	// modules: ['@vueuse/nuxt', '@nuxtjs/tailwindcss', '@nuxt/eslint'],
	// modules: ["nuxt-server-utils"],
	nitro: {
		//plugins: ['~/server/index.ts'],
		experimental: { websocket: true },
	},

	runtimeConfig: {
		//mongodbUri: process.env.MONGODB_URI,
	},
	css: ['~/assets/styles/global.scss'],
	vite: {
		plugins: [tailwindcss()],
	},
	// typescript: {
	//   typeCheck:true,
	// }

	// devtools: { enabled: true },
	// vite: {
	//   plugins: [
	//     tailwindcss(),
	//   ],
	// },
});
