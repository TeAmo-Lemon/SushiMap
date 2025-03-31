import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TheAboutPage from '@/views/TheAboutPage.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Layout from '@/views/Layout.vue'

// history: createWebHistory(import.meta.env.BASE_URL),

const routes = [
  { path: '/login', name: 'login', component: Login, },
  { path: '/register', name: 'register', component: Register },
  {
    path: '/', component: Layout, redirect: '/home', children: [
      {
        path: '/home', name: "/home", component: HomeView, meta: {
          title: "首页"
        }
      },
      {
        path: '/about', name: "/about", component: TheAboutPage, meta: {
          title: "关于"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
