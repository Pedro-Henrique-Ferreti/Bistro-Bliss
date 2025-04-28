import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import MenuView from '@/views/MenuView.vue';
import BlogView from '@/views/BlogView.vue';
import BookTableView from '@/views/BookTableView.vue';
import ContactView from '@/views/ContactView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { left: 0, top: 0 };
  },
  routes: [
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
      path: '/blog/:postId',
      name: 'blog-post',
      component: HomeView,
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
  ],
});

export default router;
