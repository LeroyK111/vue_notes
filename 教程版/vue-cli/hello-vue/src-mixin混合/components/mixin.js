// 暴露语法
export const mixin = {
  // 事件共享
  methods: {
    showName() {
      alert(this.name);
    },
  },

  // 生命周期混合
  mounted() {
    console.log("生命结束时，我忘记要干什么了");
  },
};

// 可以多个
export const mixin2 = {};
 