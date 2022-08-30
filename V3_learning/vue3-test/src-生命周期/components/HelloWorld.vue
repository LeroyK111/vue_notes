<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
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

export default {
  name: "HelloWorld",
  setup() {
    let sum = ref(0);

    /*
    通过组合式API的形式写生命周期。
    beforeCreate() + created() 合并到 setup()，但是外部可以继续调用，且setup先执行
    */
    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");
    });
    onBeforeUpdate(() => {
      console.log("onBeforeUpdate");
    });
    onUpdated(() => {
      console.log("onUpdated");
    });
    onBeforeUnmount(() => {
      console.log("onBeforeUnmount");
    });
    onUnmounted(() => {
      console.log("onUnmounted");
    });

    return {
      sum,
    };
  },
  // 通过配置项目使用生命周期
  // beforeCreate() {
  //   console.log("--beforeCreate--");
  // },

  // created() {
  //   console.log("--created--");
  // },

  // mounted() {
  //   console.log("--mounted--");
  // },

  // beforeUpdate() {
  //   console.log("--beforeUpdate--");
  // },

  // updated() {
  //   console.log("--updated--");
  // },
  // // 更名了，取消挂载，终结定时器之类的
  // beforeUnmount() {
  //   console.log("--beforeUnmount--");
  // },
  // // 更名了，彻底销毁，
  // unmounted() {
  //   console.log("--unmounted--");
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
