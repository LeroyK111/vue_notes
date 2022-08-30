import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

// vuerouter4对应vue3 vue2对应vuerouter3
import VueRouter from "vue-router";
import router from "./router/index";

// 注册路由
Vue.use(VueRouter)

new Vue({
  render: (h) => h(App),
  // 路由器
  router: router,
}).$mount("#app");
