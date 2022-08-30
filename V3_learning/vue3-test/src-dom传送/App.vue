<template>
  <!-- 借助开发者工具，可以看到当没有根标签存在时，其实生成了一个虚拟标签Fragment -->
  <h3>我是App组件</h3>
  <h3>我是App组件</h3>
  <div class="app">
    <h3>我是App组件</h3>
    <child></child>
  </div>
</template>

<script>
import {
  reactive,
  readonly,
  ref,
  toRefs,
  shallowReactive,
} from "@vue/reactivity";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },
  /*
  vue2存在Options api 配置式API

  vue3存在Composition api 组合式API 重点hooks可以封装数据，方法，计算属性，生命周期
  */

  setup() {
    let car = reactive({ name: "大奔", price: 100 });
    let sum = ref(0);
    let car2 = readonly(car);
    let shadow = shallowReactive({
      a: 1,
      b: 2,
      c: {
        d: 3,
      },
    });

    return { car, sum, car2, shadow };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
