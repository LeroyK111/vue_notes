import { createApp } from 'vue'
import App from './App.vue'

// 更精简的引入方式,app比vm更轻
const app = createApp(App)
// mount || unmount
app.mount('#app');


// app上挂载方法更少了
// console.log(app);

/*
app.config
*/

// 注册组件
// app.component()

// 全局指令
// app.directive()

// 全局混合
// app.mixin()

// 注册插件
// app.use()

// 添加全局原型，
// app.config.globalProperties



// 动画属性改变

// 自定义按键移除

// 移除native修饰符，直接申明即可将原生click事件，编程自定义事件

// 移除过滤器(filter)