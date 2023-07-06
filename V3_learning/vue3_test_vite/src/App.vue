<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3.0 + Vite" /> -->
  <Test ref="test"></Test>
</template>

<script setup>
// import HelloWorld from './components/HelloWorld.vue'
import Test from './components/Test.vue'
import {ref, onMounted} from "vue"
// 对于array能监听到数组变换的函数
  //push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()
// console.log(log);
const test = ref(null)


onMounted(()=>{
  console.log(test.value.msg);
  test.value.log();
})

</script>
