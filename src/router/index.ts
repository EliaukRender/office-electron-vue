import { createRouter, createWebHashHistory } from 'vue-router';

import Layout from '@/views/Layout/index.vue';

// 路由
const routes = [
  {
    path: '/',
    redirect: '/layout',
  },
  {
    path: '/layout',
    name: 'layout',
    component: Layout,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
