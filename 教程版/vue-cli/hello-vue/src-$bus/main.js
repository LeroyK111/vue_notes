// 引入vue，使用最完整的vue.js，而不是压缩or残缺的版本的
// import Vue from "vue/dist/vue";
import Vue from "vue";
// 引入app组件，他是所有组件的父亲组件。
import App from "./App.vue";

// 关闭生产提示
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    // 附加新对象，然后在转为vm对象即可，这就是全局事件总线
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
