import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// 全局样式
import '@/assets/style/reset.scss'
import '@/assets/style/global.scss'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')