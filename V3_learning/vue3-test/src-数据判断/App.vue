<template>
  <div class="app">
    <h3>我是App组件</h3>
    <Child></Child>
  </div>
</template>

<script>
import {
  isRef,
  reactive,
  readonly,
  ref,
  toRefs,
  isReadonly,
  isProxy,
  isReactive,
  isShallow,
  shallowReactive,
} from "@vue/reactivity";
import Child from "./components/Child.vue";
export default {
  name: "App",
  components: {
    Child,
  },

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

    // 导入数据判断
    console.log(isRef(sum));
    console.log(isReactive(car));
    console.log(isReadonly(car2));
    console.log(isShallow(shadow));
    // 只有对象才能转变为响应式的
    console.log(isProxy(sum));
    console.log(isProxy(car));

    return { car, sum, car2 };
  },
};
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
