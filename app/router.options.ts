import type { RouterConfig } from '@nuxt/schema';
import HomeView from '@/views/HomeView.vue';
import MenuView from '@/views/MenuView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';
import BookTableView from '@/views/BookTableView.vue';
import BlogView from '@/views/BlogView.vue';
import BlogArticleView from '@/views/BlogArticleView.vue';

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
      component: BlogView,
    },
    {
      path: '/blog/:slug',
      name: 'blog-article',
      component: BlogArticleView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/book-a-table',
      name: 'book-table',
      component: BookTableView,
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: { name: 'home', params: {} },
    },
  ]),
} satisfies RouterConfig;
