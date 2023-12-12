/**
 * @author Leroy
 * 根绑定
*/

import { createApp } from 'vue'
import './style.scss'
import "normalize.css"
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
createApp(App).use(pinia).mount('#login')
