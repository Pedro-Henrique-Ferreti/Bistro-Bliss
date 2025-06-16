import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
	modules: ['@nuxt/eslint'],
	devtools: { enabled: true },
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
