import type { RouterConfig } from '@nuxt/schema';
import HomeView from '@/views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import AboutView from '@/views/AboutView.vue';

export default {
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes: () => ([
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: MenuView,
      meta: {
        header: { transparentBackground: true },
      },
    },
    {
      path: '/blog',
      name: 'blog',
      component: HomeView,
    },
    {
      path: '/blog/:articleId',
      name: 'blog-article',
      component: HomeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: HomeView,
    },
    {
      path: '/book-a-table',
      name: 'book-table',
      component: HomeView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home', params: {} },
    },
  ]),
} satisfies RouterConfig;
