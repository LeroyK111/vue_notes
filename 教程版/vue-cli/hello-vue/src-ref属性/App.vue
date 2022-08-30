<template>
  <!-- 使用快捷键生成模板<vue -->
  <div>
    <img src="./assets/logo.png" alt="">
    <!-- 我给哪个标签加入ref标签，我就能拿到该dom -->
    <h1 v-text="msg" ref="title"></h1>
    <button @click="showDom" ref="btn">点我输出</button>
    <!-- 必须加入根元素 -->
    <!-- 对于组件而言，加入ref，可以实现组件间通信 -->
    <school ref="sch"></school>
    <student/>
  </div>
</template>

<script>// @ts-nocheck

import school from "./components/school"
import student from './components/student'


export default {
  name: "App",
  components:{
    school,
    student
  },
  data() {
    return {
      msg:'快来学习vue'
    }
  },
  methods:{
    showDom(){
      // 通过ref拿到dom元素
      console.log(this.$refs);
    }
  }
};
</script>

<style>
/* 全局css设置 */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
