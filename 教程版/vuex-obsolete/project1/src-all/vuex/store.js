/*
!官方推荐写法，/src/store/index.js
!我用民间写法 /src/vuex/store.js
*/
import Vue from "vue";
import Vuex from "vuex";
// !创建最核心的store
// 使用全局状态插件
Vue.use(Vuex);




// *响应组件中的动作
const actions = {
  add(context, value) {
    console.log(context, value);
    context.commit("add", value);
  },
};

// *操作数据state
const mutations = {
  add(state, value) {
    console.log(state, value);
    state.sum += +value;
  },
  addUser(state, value) {
    state.userList.unshift(value);
  },
};
// *存储数据
const state = {
  sum: 0,
  school: "北京大学",
  msg: "世界知识",
  userList: [{ id: "001", name: "四弟" }],
};

// *全局计算器
const getters = {
  bigSum(state) {
    return state.sum * 10;
  },
};

// 创建状态对象
export default new Vuex.Store({
  actions,
  mutations,
  state,
  // 导入全局计算器
  getters,
});
