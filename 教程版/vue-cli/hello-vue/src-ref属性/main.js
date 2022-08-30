// 引入vue，使用最完整的vue.js，而不是压缩or残缺的版本的
// import Vue from "vue/dist/vue";
import Vue from "vue";
// 引入app组件，他是所有组件的父亲组件。
import App from "./App.vue";

/*
关闭生产提示
*/
Vue.config.productionTip = false;

new Vue({
  /*
  将app注册到容器中。
  */
  // 简写版本
  render: (h) => h(App),

  //  render完全版本
  // render(createElement) {
  //   console.log(typeof createElement);
  //   return createElement('h2', '你好啊');
  // },

  // template: "<h2>你好啊<h2>",
}).$mount("#app");
// $mount直接绑定容器

// npm run serve
