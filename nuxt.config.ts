export default defineNuxtConfig({
	modules: ['@nuxt/eslint'],
	devtools: { enabled: true },
	devServer: {
		port: 8080,
	},
	compatibilityDate: '2025-05-15',
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
