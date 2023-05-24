<template lang="zh-cn">
  <div class="app">
    <h1>我是App组件</h1>
    <!-- 利用子组件的defineExpose 就可以完成子向父传递消息 -->
    <Child @add="handleAdd" ref="childRefs"></Child>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";
import Child from "./components/Child.vue";

// 利用事件回调传递消息
const handleAdd = value => {console.log(value);}

const childRefs = ref(null)

onMounted(() => {
  console.log(childRefs.value.child);
})

</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
