import { defineStore } from 'pinia'
import axios from '../utils/axios'

export const useUserStore = defineStore('user', {
    state: () => ({
        user: null,
        isAuthenticated: false,
        token: null
    }),

    actions: {
        async login(credentials) {
            try {
                const response = await axios.post('/auth/login', credentials)
                const { token, user } = response.data

                // 保存 token 和用户信息
                this.token = token
                this.user = user
                this.isAuthenticated = true

                // 将 token 存储在 localStorage
                localStorage.setItem('token', this.token)
                localStorage.setItem('user', JSON.stringify(this.user))

                return true
            } catch (error) {
                console.error('登录错误:', error)
                throw error
            }
        },

        async register(userData) {
            try {
                await axios.post('/auth/register', userData)
                return true
            } catch (error) {
                console.error('注册错误:', error)
                throw error
            }
        },

        logout() {
            this.user = null
            this.isAuthenticated = false
            this.token = null
            localStorage.removeItem('token')
            localStorage.removeItem('user')
        },

        checkAuth() {
            const token = localStorage.getItem('token')
            const user = localStorage.getItem('user')

            if (token && user) {
                this.token = token
                this.user = JSON.parse(user)
                this.isAuthenticated = true
            }
        },

        // 获取认证头
        getAuthHeader() {
            return this.token ? { 'Authorization': `Bearer ${this.token}` } : {}
        }
    }
}) 