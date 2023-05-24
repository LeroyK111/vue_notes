// @ts-nocheck
import app from "./app";

Vue.config.productionTip = false;

const vm = new Vue({
  template: `<app></app>`,
  el: "#root",
  components: {
    app,
  },
});
