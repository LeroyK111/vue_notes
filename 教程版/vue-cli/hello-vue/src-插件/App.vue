<template>
  <!-- 使用快捷键生成模板<vue -->
  <div>
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
  components: {
    student,
    school,
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
