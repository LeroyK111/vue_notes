<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="test">测试触发hello事件</button>
    <!-- 具名接收 -->
    <slot name="qwe"></slot>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  name: "HelloWorld",
  beforeCreate() {
    console.log("-----before-------");
  },
  // 还是要接收参数，
  props: ["school"],
  // 还要申明绑定的事件
  emits:['hello'],
  setup(props, context) {
    console.log("----setup-----");
    // console.log(props);

    // 接收没有被申明的传参
    // console.log(context.attrs);
    // 触发自定义事件
    function test(params) {
      context.emit("hello", 1, 2, 3);
    }
   
    console.log(context.slots);



    let msg = ref("测试");
    return {
      msg,
      test
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
