<template>
<button @click="isShow = !isShow">挂载/卸载</button>
<HelloWorld v-if="isShow" ref="childrefs"></HelloWorld>
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
  components: {
    HelloWorld,
  },

  setup(){
    let isShow = ref(true)

    return {
      isShow,
      childrefs
    }
  }
};
</script>

<style></style>
