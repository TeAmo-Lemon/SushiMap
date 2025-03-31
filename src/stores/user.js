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

                // ���� token ���û���Ϣ
                this.token = token
                this.user = user
                this.isAuthenticated = true

                // �� token �洢�� localStorage
                localStorage.setItem('token', this.token)
                localStorage.setItem('user', JSON.stringify(this.user))

                return true
            } catch (error) {
                console.error('��¼����:', error)
                throw error
            }
        },

        async register(userData) {
            try {
                await axios.post('/auth/register', userData)
                return true
            } catch (error) {
                console.error('ע�����:', error)
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

        // ��ȡ��֤ͷ
        getAuthHeader() {
            return this.token ? { 'Authorization': `Bearer ${this.token}` } : {}
        }
    }
}) 