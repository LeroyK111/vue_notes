<template>
<div class="child">
  <h1>我是child组件</h1>
  {{num}}
</div>
</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  name: "Child",
  setup(){
    let num = ref(0)
    // 和Suspense共同使用
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        resolve({num})
      }, 1000);
    })
  }
};
</script>

<style scoped>
  .child{
    background-color: skyblue;
  }
</style>
