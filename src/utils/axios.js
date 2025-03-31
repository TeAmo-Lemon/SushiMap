import axios from 'axios'
import { useUserStore } from '../stores/user'
import router from '../router'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(
    config => {
        const userStore = useUserStore()
        if (userStore.token) {
            config.headers.Authorization = `Bearer ${userStore.token}`
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// 响应拦截器
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // token 过期或无效，清除用户信息并跳转到登录页
                    const userStore = useUserStore()
                    userStore.logout()
                    router.push('/login')
                    break
                case 403:
                    console.error('没有权限访问该资源')
                    break
                case 404:
                    console.error('请求的资源不存在')
                    break
                case 500:
                    console.error('服务器错误')
                    break
                default:
                    console.error('发生错误:', error.response.data)
            }
        }
        return Promise.reject(error)
    }
)

export default instance 