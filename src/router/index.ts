import { createRouter, createWebHistory } from 'vue-router';
import Login from '../pages/auth/Login.vue';

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    component: () => import('../components/layout/appLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'dashboard',
        component: () => import('../pages/dashboard/dashboard.vue'),
      },
      {
        path: 'assets',
        name: 'assets',
        component: () => import('../pages/assets/AssetList.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
