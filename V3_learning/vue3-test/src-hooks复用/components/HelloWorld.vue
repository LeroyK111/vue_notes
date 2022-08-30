<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前鼠标坐标 X:{{ point.x }}---Y:{{ point.y }}</h2>
</template>

<script>
import {
  reactive,
  computed,
  ref,
  watch,
  watchEffect,
  onBeforeUnmount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeMount,
  onUnmounted,
} from "vue";

// 直接将数据，事件方法，生命周期，全部复用
import usePoint from "../hooks/usePoint";

export default {
  name: "HelloWorld",
  setup() {
    let sum = ref(0);
    // 类似mixin混合
    let point = usePoint();

    return {
      sum,
      point
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>

