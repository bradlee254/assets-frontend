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
      {
        path: 'assets/:id',
        name: 'asset-profile',
        component: () => import('../pages/assets/AssetProfile.vue'),
        props: true, 
      },
      {
        path: 'assets/:id/edit',
        name: 'asset-edit',
        component: () => import('../pages/assets/AssetForm.vue'),
        props: true,
      },
      {
        path: 'assets/new',
        name: 'asset-new',
        component: () => import('../pages/assets/AssetForm.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
