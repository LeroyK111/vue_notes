// 开始插件
export default {
  install(Vue, ...args) {
    console.log("我是一个插件");
    // 传入了vue本身，
    console.log(Vue);
    // 接收参数
    console.log(args);

    // 注册一个全局过滤器
    Vue.filter("guolvqi", function (value) {
      console.log("我是全局过滤器");
      return value.slice(0,4);
    });

    // 定义全局自定义指令
    Vue.directive('gl', {
      // 指令与元素成功绑定时(一上来)，初始值reset
      bind(element, bindding) {
        console.log("bind");
        element.value = bindding.value;
      },
      // 指令所在元素被插入页面时，create
      inserted(element) {
        console.log("inserted");
        // 焦点聚集了
        element.focus();
      },
      // 指令所在模板被重新解析时，update
      update(element, bindding) {
        console.log("update");
        element.value = bindding.value;
      },
    });

    // 定义混合
    Vue.mixin({
      data() {
        return {
          x: 100,
          y: 100,
        };
      },
    });

    // 给vue原型添加方法
    Vue.prototype.demo = ()=>(alert("你好啊"))
  },
};
