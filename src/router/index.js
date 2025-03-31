import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TheAboutPage from '../views/TheAboutPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import { useUserStore } from '../stores/user'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true }
    },
    {
      path: '/about',
      name: 'about',
      component: TheAboutPage,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: { requiresAuth: false }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: { requiresAuth: false }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  userStore.checkAuth()

  if (to.meta.requiresAuth && !userStore.isAuthenticated) {
    next('/login')
  } else if ((to.path === '/login' || to.path === '/register') && userStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router
