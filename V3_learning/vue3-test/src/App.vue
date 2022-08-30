<template>
  <div class="app">
    <h1>我是App组件</h1>
    <Child></Child>
  </div>
</template>

<script>
import Child from "./components/Child.vue";

export default {
  name: "App",
  components: {
    Child,
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
