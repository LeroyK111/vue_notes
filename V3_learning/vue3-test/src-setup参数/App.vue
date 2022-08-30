<template>
  <HelloWorld school="传给子组件" nomor="我不被申明" @hello="showHello">
  <!-- v-slot才是新api -->
  <template v-slot:qwe>
     <span>我是一个插槽</span>
  </template>
 <template v-slot:asd>
     <span>我是一个插槽</span>
  </template>
  </HelloWorld>
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
  setup(){
    function showHello(...params) {
      alert("自定义事件"+params)
    }

    return {
      showHello
    }
  },
  components: {
    HelloWorld,
  },
};
</script>

<style></style>
