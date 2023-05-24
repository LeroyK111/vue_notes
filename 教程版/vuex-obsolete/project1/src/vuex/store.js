/*
!官方推荐写法，/src/store/index.js
!我用民间写法 /src/vuex/store.js
*/
import Vue from "vue";
import Vuex from "vuex";
// !创建最核心的store
// 使用全局状态插件
Vue.use(Vuex);

import * as axios from "axios";

// 拆分成为两组
const userlistOptions = {
  namespaced: true,
  // *响应组件中的动作
  actions: {
    addPerServer(context) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (res) => {
          console.log(res.data);
          context.commit("addUser", { id: nanoid(), name: res.data });
        },
        (error) => {
          alert("出错了");
        }
      );
    },
  },
  mutations: {
    addUser(state, value) {
      state.userList.unshift(value);
    },
  },
  state: {
    userList: [{ id: "001", name: "四弟" }],
  },
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

// 直接外部引入接口
import countOptions from "./countOptions";
import { nanoid } from "nanoid";

// 创建状态对象
export default new Vuex.Store({
  // 彻底模块化了，我们需要引用
  modules: {
    constAll: countOptions,
    userAll: userlistOptions,
  },
});
