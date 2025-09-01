<script setup>
/**
 * @author Leroy
 * h函数的问题，事件可以正常绑定，插槽不行，双向数据绑定不行
*/
import { ref, reactive, h, toRefs, toRef, computed } from "vue";

const option = reactive({
  innerText: "你好",
});

const backgroundColor = ref("red");

const click = (e) => {
  backgroundColor.value = 'green';
  console.log(e);
};

const dom = h("div", {
  style: {
    backgroundColor: backgroundColor.value,
    width: "100px",
    height: "100px",
  },
  innerText: option.innerText,
  onClick: click,
});


</script>

<template>
  <dom></dom>
  <button @click="click">点我</button>
</template>

<style scoped></style>
