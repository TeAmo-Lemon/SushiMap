// 请求配置

import axios from "axios";

// 定义公共前缀，创建请求实例
// const baseUrl = "http://localhost:8080";
const baseURL = '/api/';
const instance = axios.create({ baseURL })


import { ElMessage } from "element-plus"
import { useTokenStore } from "@/stores/token.js"
// 配置请求拦截器
instance.interceptors.request.use(
    (config) => {
        // 请求前回调
        // 添加token
        const tokenStore = useTokenStore()
        // 判断有无token
        if (tokenStore.token) {
            config.headers.Authorization = tokenStore.token
        }
        return config
    },
    (err) => {
        // 请求错误的回调
        Promise.reject(err)
    }
)


import router from "@/router";
// 添加响应拦截器
instance.interceptors.response.use(
    result => {
        // 判断业务状态码
        // if (result.data.code === 0) {
        //     return result.data;
        // }
        return result.data;
        // 操作失败
        // ElMessage.error(result.data.message ? result.data.message : '服务异常')
        // 异步操作的状态转换为失败
        // return Promise.reject(result.data)
    },
    err => {
        // 判断响应状态码， 401为未登录，提示登录并跳转到登录页面
        if (err.response.status === 403) {
            ElMessage.error('请先登录')
            router.push('/login')
        }
        // 异步操作的状态转换为失败
        return Promise.reject(err)
    }
)

export default instance
