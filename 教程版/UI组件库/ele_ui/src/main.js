import Vue from "vue";
import App from "./App.vue";
// 引入UI组件
// import ElementUI from "element-ui";
// UI样式
// import "element-ui/lib/theme-chalk/index.css";
Vue.config.productionTip = false;
// 不推荐完整引入
// Vue.use(ElementUI);

import { Button, Select, DatePicker } from 'element-ui';

// 标签可以起一个起名
Vue.component(Button.name, Button);
Vue.component(Select.name, Select);
Vue.component(DatePicker.name, DatePicker)

new Vue({
  render: (h) => h(App),
}).$mount("#app");
