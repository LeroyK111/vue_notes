<template>
<HelloWorld></HelloWorld>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

/*
包装属性:
refimpl 引用实现构造函数
*/
import { ref, reactive } from "vue";

export default {
  name: "App",
  setup() {
    function showHello(...params) {
      alert("自定义事件" + params);
    }

    return {
      showHello,
    };
  },
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
