// 求和的配置
export default {
  // 对模块进行注册
  namespaced:true,
  // *响应组件中的动作
  actions: {
    add(context, value) {
      console.log(context, value);
      context.commit("add", value);
    },
  },
  // *操作数据state
  mutations: {
    add(state, value) {
      console.log(state, value);
      state.sum += +value;
    },
  },
  // *存储数据
  state: {
    sum: 0,
    school: "北京大学",
    msg: "世界知识",
  },
  // 全局计算器
  getters: {
    bigSum(state) {
      return state.sum * 10;
    },
  },
};

