<template>
    <div class="register-container">
        <div class="register-box">
            <h2>注册</h2>
            <form @submit.prevent="handleRegister">
                <div class="form-group">
                    <input type="text" v-model="username" placeholder="用户名" required />
                </div>
                <div class="form-group">
                    <input type="password" v-model="password" placeholder="密码" required />
                </div>
                <div class="form-group">
                    <input type="password" v-model="confirmPassword" placeholder="确认密码" required />
                </div>
                <button type="submit">注册</button>
                <p class="login-link">
                    已有账号？<router-link to="/login">立即登录</router-link>
                </p>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '../stores/user'

const router = useRouter()
const userStore = useUserStore()
const username = ref('')
const password = ref('')
const confirmPassword = ref('')

const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
        alert('两次输入的密码不一致')
        return
    }

    try {
        await userStore.register({
            username: username.value,
            password: password.value
        })
        router.push('/login')
    } catch (error) {
        console.error('注册失败:', error)
    }
}
</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #f5f5f5;
}

.register-box {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    width: 100%;
    max-width: 400px;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}

.form-group {
    margin-bottom: 1rem;
}

input {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1rem;
}

button {
    width: 100%;
    padding: 0.8rem;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;
    margin-top: 1rem;
}

button:hover {
    background-color: #45a049;
}

.login-link {
    text-align: center;
    margin-top: 1rem;
}

.login-link a {
    color: #4CAF50;
    text-decoration: none;
}

.login-link a:hover {
    text-decoration: underline;
}
</style>