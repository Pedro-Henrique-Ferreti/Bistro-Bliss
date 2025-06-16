import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: ['@nuxt/eslint'],
	devtools: { enabled: true },
	app: {
		head: {
			title: 'Best Food for Your Taste | Bistro Bliss',
			htmlAttrs: {
				lang: 'en',
			},
			link: [
				{ rel: 'icon', href: '/favicon.png' },
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
				{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap' },
			],
		},
	},
	css: ['@/assets/css/main.css'],
	devServer: {
		port: 8080,
	},
	compatibilityDate: '2025-05-15',
	vite: {
		plugins: [tailwindcss()],
	},
	eslint: {
		checker: true,
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
