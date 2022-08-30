<template>
  <!-- 使用快捷键生成模板<vue -->
  <div>
    <!-- 通过标签。给vc传入数据，接收端和传入端只要不对应，则用undefined补充-->
    <!-- 自建标签，也可以指令化 -->
    <student name="李四" :age="18" gender="男"/>
    <hr />
    <student />
    <hr />
    <student />
  </div>
</template>

<script>
// @ts-nocheck

import student from "./components/student";

export default {
  name: "App",
  components: {
    student,
  },
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
