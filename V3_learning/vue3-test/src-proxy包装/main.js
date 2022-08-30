import { createApp } from 'vue'
import App from './App.vue'

// 更精简的引入方式,app比vm更轻
const app = createApp(App)
// mount || unmount
app.mount('#app');

// 挂载方法更少
console.log(app);

