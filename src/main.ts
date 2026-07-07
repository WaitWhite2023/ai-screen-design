import { createApp } from 'vue'
import { createPinia } from 'pinia'
// if you just want to import css
import 'element-plus/theme-chalk/dark/css-vars.css'
import App from './App.vue'
import router from './router'
import './styles/index.css'
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
