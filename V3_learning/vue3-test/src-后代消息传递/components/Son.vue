<template>
  <div class="son">
    <h2>我是孙子</h2>
    <span>{{car}}</span>
  </div>
</template>

<script>
import { inject } from 'vue';
export default {
  name: "Son",
  setup(){
    let car = inject("car")
    // 还是一个响应式数据
    console.log(car);
    return {car}
  }
};
</script>

<style scoped>
.son {
  background-color: pink;
}
</style>
