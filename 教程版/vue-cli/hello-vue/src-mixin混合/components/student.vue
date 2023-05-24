<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生名称: {{ name }}</h2>
    <h2>学生年龄: {{ myage }}</h2>
    <h2>学生性别: {{ gender }}</h2>
  </div>
</template>

<script>
import { mixin } from "./mixin";


// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "student",
  data() {
    return {
      msg: "混入，两个组件共享一个生命环节",
      name: "李四",
      myage: 18,
      gender: "男",
    };
  },
  // 混合部分配置
  mixins:[mixin],
};
</script>

<style>
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
</style>
