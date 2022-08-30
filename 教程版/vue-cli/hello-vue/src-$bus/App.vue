<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <h1>{{ msg }}</h1>
    <student/>
    <school/>
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
      msg: "测试"
    };
  },
  components: {
    student,
    school,
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
