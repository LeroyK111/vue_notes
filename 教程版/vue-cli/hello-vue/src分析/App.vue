<template>
  <!-- 使用快捷键生成模板<vue -->
  <div>
    <img src="./assets/logo.png" alt="">
    <!-- 必须加入根元素 -->
    <school></school>
    <student></student>
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
