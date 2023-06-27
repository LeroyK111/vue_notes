<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

// 对于array能监听到数组变换的函数
  //push()
// pop()
// shift()
// unshift()
// splice()
// sort()
// reverse()

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>
