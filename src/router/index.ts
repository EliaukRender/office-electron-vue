import { createRouter, createWebHashHistory } from 'vue-router';

import Login from '@/views/login/index.vue';
import Download from '@/views/download/index.vue';

// 定义路由
const routes = [
  {
    path: '/',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/download',
    name: 'download',
    component: Download,
  },
];

// 创建路由实例
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
