<template>
  <div class="child">
    <span>{{ a }}</span>
    <Func/>
    <button @click="handleSubmit" >click</button>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";
import Func from "./Func";
let a = ref("原始数据");

const emit = defineEmits(["add"])
const handleSubmit = () => {
  emit("add", a.value)
}




const child = ref("setup语法糖")

// 子组件暴露给父组件
defineExpose({ child })


</script>

<style scoped>
.child {
  background-color: skyblue;
}
</style>
