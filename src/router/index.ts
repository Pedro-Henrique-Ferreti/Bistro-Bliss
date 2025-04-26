import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: HomeView,
    },
    {
      path: '/menu',
      name: 'menu',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: HomeView,
    },
    {
      path: '/blog/:postId',
      name: 'blog-post',
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
  ],
});

export default router;
