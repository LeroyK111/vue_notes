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





<script>
// 实现多script，不同语法的脚本，比如这里是选项式
  export default {
    name: 'CustomName',
    inheritAttrs: false,
    customOptions: {}
  }
</script>

<script setup>
// 实现多script，不同语法的脚本，比如这里是组合式
import { defineAsyncComponent } from "vue"
// 这里实现了一个异步组件。
const asyncComp = defineAsyncComponent(()=>{
  return import("./app.vue")
})
  
</script>





<style></style>
