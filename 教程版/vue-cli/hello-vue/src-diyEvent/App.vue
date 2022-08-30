<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <h1>{{ msg }}</h1>
    <!-- 自定义事件绑定, v-on绑定事件监听等价于@ -->
    <!-- <student v-on:atguigu="demo" /> -->
    <student @atguigu="demo" @diyEvnet="m1" @click.native="popup"/>
    <!-- .native修饰符，这个原生事件就不会传递给子组件，而是就当作为整个子组件添加的事件 -->
    <school :getSchoolName="getSchoolName" />

    <!-- 通过ref，标记 -->
    <!-- <student ref="student" /> -->


    <!-- vm调用$destroy()都会销毁所有自定义事件，保留原生事件 -->
  </div>
</template>

<script>
// @ts-nocheck

import student from "./components/student";
import school from "./components/school";

export default {
  name: "App",
  data() {
    return {
      msg: "你好啊",
    };
  },
  components: {
    student,
    school,
  },
  methods: {
    getSchoolName(name) {
      console.log(name);
    },
    demo(name = "我被调用了", ...args) {
      console.log(name, args);
    },
    m1() {
      console.log("m1被触发了");
    },
    // 让子组件监听原生点击
    popup(){
      alert("我被监听了")
    }
  },
  // 我在这里写一个钩子
  mounted() {
    // 手动监听atguigu事件，触发了就执行this.demo
    // this.$refs.student.$on("atguigu", this.demo);
    // this.$refs.student.$once("atguigu", this.demo);

    // 监听子组件的事件，如果用回调callback(this)，这里的this默认指向vc组件(不用func直接用箭头函数)
    // this.$refs.student.$on("atguigu", function (...param) {
    //   console.log(this, param);
    // });
  },
};
</script>

<style lang="less">
/* app里不加scoped，就是为了让app成为全局样式 */
/* 全局css设置 */
// 加入语法规范lang，则可以升级为less写法，但是需要npm i less-loader
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  .app {
    background-color: gray;
  }
}
</style>
