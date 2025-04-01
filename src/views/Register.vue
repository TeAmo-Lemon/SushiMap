<template>
    <div class="register-container">
        <div class="register-card">
            <div class="translate-toggle" @click="isLiterary = !isLiterary">
                {{ isLiterary ? '现代文' : '文言文' }}
            </div>

            <div class="register-header">
                <h1>{{ isLiterary ? translations.literary.title : translations.normal.title }}</h1>
                <p>{{ isLiterary ? translations.literary.subtitle : translations.normal.subtitle }}</p>
            </div>

            <form class="register-form">
                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.username : translations.normal.username }}</label>
                    <input type="text" v-model="username"
                        :placeholder="isLiterary ? translations.literary.usernamePlaceholder : translations.normal.usernamePlaceholder"
                        required>
                </div>

                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.email : translations.normal.email }}</label>
                    <input type="email" v-model="email"
                        :placeholder="isLiterary ? translations.literary.emailPlaceholder : translations.normal.emailPlaceholder"
                        required>
                </div>

                <div class="form-group">
                    <label>密语</label>
                    <input type="password" v-model="password" placeholder="请输入密码" required>
                </div>

                <div class="form-group">
                    <label>复述密语</label>
                    <input type="password" v-model="confirmPassword" placeholder="请再次输入密码" required>
                </div>

                <button type="submit" class="register-btn">
                    {{ isLiterary ? translations.literary.submit : translations.normal.submit }}
                </button>

                <div class="register-footer">
                    <span>{{ isLiterary ? translations.literary.footerText : translations.normal.footerText }}</span>
                    <router-link to="/login">
                        {{ isLiterary ? translations.literary.footerLink : translations.normal.footerLink }}
                    </router-link>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'


const router = useRouter()
const username = ref('')
const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const isLiterary = ref(true) // 新增文艺/常规切换状态

// 翻译映射表
const translations = {
    literary: {
        title: "新客入册",
        subtitle: "请君执笔，留名于此",
        username: "雅号",
        email: "飞鸿",
        password: "密语",
        confirmPassword: "复述密语",
        submit: "落 印",
        footerText: "已是座上客？",
        footerLink: "请入雅座",
        usernamePlaceholder: "请输入雅号",
        emailPlaceholder: "请输入飞鸿传书",
        passwordPlaceholder: "请设密语",
        confirmPlaceholder: "请再述密语"
    },
    normal: {
        title: "用户注册",
        subtitle: "请填写以下信息完成注册",
        username: "账号",
        email: "邮箱",
        password: "密码",
        confirmPassword: "确认密码",
        submit: "注 册",
        footerText: "已有账号？",
        footerLink: "立即登录",
        usernamePlaceholder: "请输入账号",
        emailPlaceholder: "请输入邮箱",
        passwordPlaceholder: "请输入密码",
        confirmPlaceholder: "请再次输入密码"
    }
}


</script>

<style scoped>
.register-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
}

.register-card {
    width: 380px;
    padding: 40px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 15px 35px rgba(50, 50, 93, .1), 0 5px 15px rgba(0, 0, 0, .07);
    transition: transform 0.3s ease;
    position: relative;
    /* 新增相对定位 */
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

.register-card:hover {
    transform: translateY(-5px);
}

.register-header {
    text-align: center;
    margin-bottom: 30px;
}

.register-header h1 {
    font-size: 24px;
    color: #2d3748;
    margin-bottom: 8px;
}

.register-header p {
    color: #718096;
    font-size: 14px;
}

.form-group {
    margin-bottom: 20px;
    padding: 0 10px;
}

input {
    width: calc(100% - 32px);
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

.register-btn {
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

.register-btn:hover {
    background: linear-gradient(to right, #3182ce, #2b6cb0);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.register-footer {
    margin-top: 20px;
    text-align: center;
    font-size: 14px;
    color: #718096;
}

.register-footer a {
    color: #4299e1;
    text-decoration: none;
    margin-left: 5px;
    font-weight: 500;
}

.register-footer a:hover {
    text-decoration: underline;
}

/* 新增切换按钮样式 */
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

/* 其他样式保持不变 */
</style>