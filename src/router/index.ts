import { createRouter, createWebHistory } from 'vue-router'
import Login from '../pages/auth/Login.vue'
import Register from '../pages/auth/Register.vue'
import Welcome from '../pages/Welcom.vue'
import { AuthService } from '../services/auth.service'

const routes = [
  //  Public Welcome Page
  {
    path: '/',
    name: 'welcome',
    component: Welcome,
  },

  //  Auth Pages
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },

  //  Protected App
  {
    path: '/',
    component: () => import('../components/layout/appLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../pages/dashboard/dashboard.vue'),
      },
      {
        path: 'assets',
        name: 'assets',
        component: () => import('../pages/assets/AssetList.vue'),
      },
      {
        path: 'assets/new',
        name: 'asset-new',
        component: () => import('../pages/assets/AssetForm.vue'),
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
        path: 'categories',
        name: 'categories',
        component: () => import('../pages/categories/CategoryList.vue'),
      },
      {
        path: 'reports',
        name: 'reports',
        component: () => import('../pages/reports/reports.vue'),
      },
    ],
  },

  // ❌ 404
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../pages/NotFound.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

/**
 * 🔐 Global Auth Guard
 */
router.beforeEach((to, from, next) => {
  const isAuthenticated = AuthService.isAuthenticated()
  const requiresAuth = to.matched.some(route => route.meta.requiresAuth)

  // If route requires auth and user is not logged in
  if (requiresAuth && !isAuthenticated) {
    return next({ name: 'login' })
  }

  // If user is logged in and tries to access login/register
  if (
    isAuthenticated &&
    (to.name === 'login' || to.name === 'register' || to.name === 'welcome')
  ) {
    return next({ name: 'dashboard' })
  }

  next()
})

export default router
