import Vue from "vue";
import App from "./App.vue";

// 老版本请求件,推荐axios
import VueResource from "vue-resource";
// 我们自己创建了store
import store from "./vuex/store";


Vue.config.productionTip = false;

Vue.use(VueResource);

new Vue({
  render: (h) => h(App),
  // 为vm身上引入$store
  store,
}).$mount("#app");

// console.log(vm);
