<template>
  <div>
    <input type="text" ref="inputRef">
    <!-- 
      <Teleport> 引入了一个 defer 属性，它会在当前渲染周期之后挂载传送门， 
      延迟传送门，加 defer 属性后，则会渲染结束后传送
    
    -->
    <Teleport defer to="#container">...</Teleport>
  </div>
</template>

<script setup lang="ts">
/**
 * @author Leroy
 * v3.5 版本可以使用useTemplateRef 获取 ref 同样的效果
 * 支持动态 ref 绑定到变化的 ID
 */

import { useTemplateRef } from "vue";
const inputRef = useTemplateRef("input");
// 
console.log(inputRef.value);

</script>

<style scoped></style>
