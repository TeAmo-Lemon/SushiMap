import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhLocale from 'element-plus/es/locale/lang/zh-cn'

const app = createApp(App)
const pinia = createPinia()
import { createPersistedState } from 'pinia-plugin-persistedstate'

const persist = createPersistedState()
pinia.use(persist)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { locale: zhLocale }) // 使用 Element Plus

app.mount('#app')
