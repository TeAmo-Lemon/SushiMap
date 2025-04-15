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

            <form class="register-form" @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.username : translations.normal.username }}</label>
                    <input type="text" v-model="registerData.loginName"
                        :placeholder="isLiterary ? translations.literary.usernamePlaceholder : translations.normal.usernamePlaceholder"
                        required>
                </div>

                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.email : translations.normal.email }}</label>
                    <input type="email" v-model="registerData.email"
                        :placeholder="isLiterary ? translations.literary.emailPlaceholder : translations.normal.emailPlaceholder"
                        required>
                </div>

                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.password : translations.normal.password }}</label>
                    <input type="password" v-model="registerData.password"
                        :placeholder="isLiterary ? '密语需含大小写且长于六位' : '密码需包含大小写字母且长度大于6位'" required>
                </div>

                <div class="form-group">
                    <label>{{ isLiterary ? translations.literary.confirmPassword :
                        translations.normal.confirmPassword }}</label>
                    <input type="password" v-model="confirmPassword" placeholder="请再次输入密码" required>
                </div>

                <div class="form-group captcha-group">
                    <label>{{ isLiterary ? translations.literary.captcha : translations.normal.captcha }}</label>
                    <div class="captcha-wrapper">
                        <input type="text" v-model="registerData.captcha"
                            :placeholder="isLiterary ? translations.literary.captchaPlaceholder : translations.normal.captchaPlaceholder"
                            required>
                        <button type="button" class="captcha-btn" :disabled="captchaCountdown > 0" @click="getCaptcha">
                            {{ captchaCountdown > 0 ? `${captchaCountdown}秒后重试` : (isLiterary ?
                                translations.literary.captchaBtn : translations.normal.captchaBtn) }}
                        </button>
                    </div>
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
import { ElMessage } from 'element-plus'

const router = useRouter()

const isLiterary = ref(false) // 新增文艺/常规切换状态

const confirmPassword = ref('')
const captchaCountdown = ref(0) // 验证码倒计时


const registerData = ref({
    loginName: '',
    email: '',
    password: '',
    captcha: '' // 验证码输入
})

// 翻译映射表
const translations = {
    literary: {
        title: "新客入册",
        subtitle: "请君执笔，留名于此",
        username: "雅号",
        email: "飞鸿",
        password: "密语",
        confirmPassword: "复述密语",
        captcha: "验符",
        submit: "落 印",
        footerText: "已是座上客？",
        footerLink: "请入雅座",
        usernamePlaceholder: "请输入雅号",
        emailPlaceholder: "请输入飞鸿传书",
        passwordPlaceholder: "请设密语",
        confirmPlaceholder: "请再述密语",
        captchaPlaceholder: "请输入验符",
        captchaBtn: "索取验符"
    },
    normal: {
        title: "用户注册",
        subtitle: "请填写以下信息完成注册",
        username: "账号",
        email: "邮箱",
        password: "密码",
        confirmPassword: "确认密码",
        captcha: "验证码",
        submit: "注 册",
        footerText: "已有账号？",
        footerLink: "立即登录",
        usernamePlaceholder: "请输入账号",
        emailPlaceholder: "请输入邮箱",
        passwordPlaceholder: "请输入密码",
        confirmPlaceholder: "请再次输入密码",
        captchaPlaceholder: "请输入验证码",
        captchaBtn: "获取验证码"
    }
}

import { userEmailService } from '@/api/user.js'
import { userRegisterService } from "@/api/user.js";

const checkEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 简单的邮箱验证
    return emailRegex.test(registerData.value.email);
}

// 获取验证码
const getCaptcha = async () => {
    if (!registerData.value.email) {
        ElMessage.error(isLiterary.value ? '请先填飞鸿' : '请先填写邮箱');
        return;
    }

    if (!checkEmail()) {  // 修改为检查返回false的情况
        ElMessage.error(isLiterary.value ? '飞鸿有误' : '邮箱格式错误');
        return;
    }

    let timeout = false; // 用于标记是否超时
    const TIMEOUT_DURATION = 5000; // 设定超时时间 (5秒)

    // 设定超时提示
    const timeoutHandler = setTimeout(() => {
        timeout = true;
        ElMessage.warning('服务器响应超时，请稍后重试');
    }, TIMEOUT_DURATION);

    try {
        // 发送验证码请求
        const res = await userEmailService({ email: registerData.value.email });

        clearTimeout(timeoutHandler); // 请求成功，清除超时定时器

        if (!timeout) { // 确保不是超时后才返回的结果
            if (res.code == 0) {
                if (res.msg !== "60") {
                    captchaCountdown.value = Number(res.msg);
                    ElMessage.error(`请在${res.msg}秒后重试`);
                } else {
                    captchaCountdown.value = 60;
                    ElMessage.success(isLiterary.value ? '飞鸿已传，速查飞鸿' : '验证码已发送，请查收邮箱');
                }
            } else {
                ElMessage.error(res.msg);
            }
        }
    } catch (error) {
        console.log(error);
        clearTimeout(timeoutHandler); // 请求异常，清除超时定时器
        if (!timeout) {
            ElMessage.error('网络异常，请稍后重试');
        }
    }

    // 模拟倒计时
    const timer = setInterval(() => {
        captchaCountdown.value--;
        if (captchaCountdown.value <= 0) {
            clearInterval(timer);
        }
    }, 1000);
};


const checkPassword = () => {
    const password = registerData.value.password;
    // 密码长度大于6位且包含大小写字母
    return password.length >= 6 && /[a-z]/.test(password);
}

// 提交注册表单
const handleSubmit = () => {
    if (!checkPassword()) {
        ElMessage.error(isLiterary.value ? '密语需含字母和数字且长于六位' : '密码需包含字母和数字且长度大于6位');
        return;
    }

    if (registerData.value.password !== confirmPassword.value) {
        ElMessage.error(isLiterary.value ? '密语不合' : '两次密码不一致')
        return
    }
    if (!registerData.value.captcha) {
        ElMessage.error(isLiterary.value ? '验符不可空' : '验证码不能为空')
        return
    }

    userRegisterService(registerData.value).then(res => {
        if (res.code == 0) {
            ElMessage.success(isLiterary.value ? '入册成功，速入雅座' : '注册成功，请登录')
            router.push('/login')
        } else {
            console.log(res.msg)
            ElMessage.error(res.msg)
        }
    })

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

.captcha-group {
    display: flex;
    flex-direction: column;
}

.captcha-wrapper {
    display: flex;
    gap: 10px;
}

.captcha-wrapper input {
    width: calc(60% - 32px);
    /* 调整验证码输入框宽度 */
}

.captcha-btn {
    width: 40%;
    padding: 12px;
    background: linear-gradient(to right, #68d391, #48bb78);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.captcha-btn:disabled {
    background: #a0aec0;
    cursor: not-allowed;
}

.captcha-btn:hover:not(:disabled) {
    background: linear-gradient(to right, #48bb78, #38a169);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
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
</style>