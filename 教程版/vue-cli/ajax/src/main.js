import Vue from "vue";
import App from "./App.vue";
// 已经不推荐这种请求方式了
import vueResource from "vue-resource";
Vue.config.productionTip = false;

Vue.use(vueResource)

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
