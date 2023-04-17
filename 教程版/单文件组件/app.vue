<template>
  <!-- 使用快捷键生成模板<vue -->
  <div>
    <!-- 必须加入根元素 -->
    <school></school>
    <student></student>
  </div>
</template>

<script>// @ts-nocheck

import school from "./school"
import student from './student'


export default {
  name: "app",
  components:{
    school,
    student
  }
};
</script>

<style></style>
