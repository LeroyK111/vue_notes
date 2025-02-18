import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

const app = createApp(App)
// 在此应用程序中为通过useId（）生成的所有ID配置前缀。
app.config.idPrefix = "useIdTest"
app.mount('#app')


