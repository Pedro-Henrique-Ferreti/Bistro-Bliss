import tailwindcss from '@tailwindcss/vite';
import svgLoader from 'vite-svg-loader';

export default defineNuxtConfig({
  modules: ['@nuxt/eslint'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Bistro Bliss',
      titleTemplate: '%s | Bistro Bliss',
      htmlAttrs: {
        lang: 'en',
      },
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js' },
      ],
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
    vue: {
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('swiper'),
        },
      },
    },
    plugins: [
      tailwindcss(),
      svgLoader({
        svgoConfig: {
          plugins: [{
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
              },
            },
          }],
        },
      }),
    ],
  },
  typescript: {
    typeCheck: true,
  },
  eslint: {
    checker: true,
    config: {
      stylistic: {
        semi: true,
      },
    },
  },
});
