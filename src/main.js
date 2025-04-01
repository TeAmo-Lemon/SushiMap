import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// ���� Element Plus
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
app.use(ElementPlus, { locale: zhLocale }) // ʹ�� Element Plus

app.mount('#app')
