import axios from 'axios'
import { useUserStore } from '../stores/user'
import router from '../router'

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
    timeout: 5000
})

// ����������
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

// ��Ӧ������
instance.interceptors.response.use(
    response => response,
    error => {
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    // token ���ڻ���Ч������û���Ϣ����ת����¼ҳ
                    const userStore = useUserStore()
                    userStore.logout()
                    router.push('/login')
                    break
                case 403:
                    console.error('û��Ȩ�޷��ʸ���Դ')
                    break
                case 404:
                    console.error('�������Դ������')
                    break
                case 500:
                    console.error('����������')
                    break
                default:
                    console.error('��������:', error.response.data)
            }
        }
        return Promise.reject(error)
    }
)

export default instance 