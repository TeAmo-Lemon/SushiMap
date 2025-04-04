import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TheAboutPage from '@/views/TheAboutPage.vue'
import Login from '@/views/Login.vue'
import Register from '@/views/Register.vue'
import Layout from '@/views/Layout.vue'

// history: createWebHistory(import.meta.env.BASE_URL),

const routes = [
  {
    path: '/login',
    component: Login
  },
  {
    path: '/',
    component: Layout,
    redirect: '/login', // 修正为有效的重定向路径
    children: [
      {
        path: '/home',
        name: 'home', // 修正命名规范（去掉斜杠）
        component: HomeView,
        meta: { title: "首页" }
      },
      {
        path: '/about',
        name: 'about', // 修正命名规范（去掉斜杠）
        component: TheAboutPage,
        meta: { title: "关于" }
      }
    ]
  },
  {
    path: '/register',
    name: 'register', // 添加命名路由
    component: Register
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
