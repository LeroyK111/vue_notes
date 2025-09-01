<template>
  <button @click="count++">count++</button>
  <button @click="runner2.pause()">暂停</button>
  <button @click="runner2.resume()">恢复</button>
</template>

<script setup lang="ts">
/**
 * @author Leroy
 * 有的场景中我们可能想在“一段时间中暂停一下”，不去执行watch或者watchEffect中的回调。等业务条件满足后再去恢复执行watch或者watchEffect中的回调。在这种场景中pause和resume方法就能派上用场啦。
 */

import { ref, watchEffect, watch } from "vue";

const count = ref(0);
const runner2 = watchEffect(() => {
  if (count.value > 0) {
    console.log(count.value);
  }
});

watch(
  {a: 1},
  () => {
    console.log("监听到obj1变化");
  },
  {
    // 例子watch的deep选项值是3，表明监听到对象的第3层。
    deep: 3,
  }
);
</script>
