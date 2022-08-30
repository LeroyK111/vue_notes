<template>
  <div class="app">
    <h3>我是App组件</h3>
    <span>{{ name + "-" + price }}</span>
    <Child></Child>
  </div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import Child from "./components/Child.vue";
import { provide } from "@vue/runtime-core";
export default {
  name: "App",
  components: {
    Child,
  },
  setup() {
    let car = reactive({
      name: "奔驰",
      price: 20,
    });
    // 给自己的后代组件传递数据，说白了就是所有components的组件，包扩后代的后代
    provide("car", car);
    return { ...toRefs(car) };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
