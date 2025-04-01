<template>
    <div class="login-container">
        <div class="login-card">
            <div class="translate-toggle" @click="isLiterary = !isLiterary">
                {{ isLiterary ? '现代文' : '文言文' }}
            </div>

            <div class="login-header">
                <h1>{{ isLiterary ? translations.literary.title : translations.normal.title }}</h1>
                <p>{{ isLiterary ? translations.literary.subtitle : translations.normal.subtitle }}</p>
            </div>

            <form class="login-form">
                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.username : translations.normal.username }}</label>
                    <input type="text" v-model="registerData.loginName"
                        :placeholder="isLiterary ? translations.literary.usernamePlaceholder : translations.normal.usernamePlaceholder"
                        required>
                </div>

                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.password : translations.normal.password }}</label>
                    <input type="password" v-model="registerData.password"
                        :placeholder="isLiterary ? translations.literary.passwordPlaceholder : translations.normal.passwordPlaceholder"
                        required>
                </div>

                <button class="login-btn" type="button" @click="login">
                    {{ isLiterary ? translations.literary.submit : translations.normal.submit }}
                </button>

                <div class="login-footer">
                    <span>{{ isLiterary ? translations.literary.footerText : translations.normal.footerText }}</span>
                    <router-link to="/register">
                        {{ isLiterary ? translations.literary.footerLink : translations.normal.footerLink }}
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { ElMessage } from 'element-plus'

const registerData = ref({
    loginName: 'admin',
    password: '123456',
})

const isLiterary = ref(true)

import { userLoginService } from '@/api/user.js'
import { useTokenStore } from '@/stores/token.js'
import { useRouter } from 'vue-router'

const router = useRouter()
const tokenStore = useTokenStore();

const login = async () => {
    try {
        // 调用登录接口
        let result = await userLoginService(registerData.value)

        ElMessage.success(result.msg ? result.msg : '登录成功')
        console.log("登录成功")
        // 存储token   
        tokenStore.setToken(result.data)
        // 跳转至首页
        router.push('/home')

    } catch (error) {
        // 错误处理
        console.error('登录失败:', error)
        ElMessage.error(error.response?.data?.message || '登录失败，请检查输入')
    }
}



// 新增翻译映射
const translations = {
    literary: {
        title: "故人归来",
        subtitle: "请执旧日信物入座",
        username: "雅号",
        password: "密语",
        submit: "落 印",
        footerText: "未有文牒？",
        footerLink: "请立新册",
        usernamePlaceholder: "请输入旧时雅号",
        passwordPlaceholder: "请输入通关密语"
    },
    normal: {
        title: "用户登录",
        subtitle: "请输入您的账户信息",
        username: "账号",
        password: "密码",
        submit: "登 录",
        footerText: "没有账号？",
        footerLink: "立即注册",
        usernamePlaceholder: "请输入账号",
        passwordPlaceholder: "请输入密码"
    }
}
</script>

<style scoped>
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.login-card {
    width: 380px;
    padding: 40px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    transition: transform 0.3s ease;
}

.translate-toggle {
    position: absolute;
    top: 15px;
    right: 15px;
    padding: 5px 10px;
    background: rgba(140, 47, 27, 0.1);
    border-radius: 4px;
    font-size: 12px;
    color: #8c2f1b;
    cursor: pointer;
    transition: all 0.3s;
}

.translate-toggle:hover {
    background: rgba(140, 47, 27, 0.2);
}

.login-card:hover {
    transform: translateY(-5px);
}

.login-header {
    text-align: center;
    margin-bottom: 30px;
}

.login-header h1 {
    font-size: 24px;
    color: #2d3748;
    margin-bottom: 8px;
}

.login-header p {
    color: #718096;
    font-size: 14px;
}

.form-group {
    margin-bottom: 20px;
    padding: 0 10px;
    /* 新增左右内边距 */
}

input {
    width: calc(100% - 32px);
    /* 调整宽度计算方式 */
    padding: 12px 16px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    transition: all 0.3s;
    background-color: #f8fafc;
}

input:focus {
    outline: none;
    border-color: #4299e1;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.2);
}

.login-btn {
    width: 100%;
    padding: 14px;
    margin-top: 10px;
    background: linear-gradient(to right, #4299e1, #3182ce);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.login-btn:hover {
    background: linear-gradient(to right, #3182ce, #2b6cb0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.login-footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #718096;
}

.login-footer a {
    color: #4299e1;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 500;
}

.login-footer a:hover {
    text-decoration: underline;
}
</style>