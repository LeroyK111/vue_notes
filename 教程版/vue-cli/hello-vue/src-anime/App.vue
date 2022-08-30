<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <anime />
    <anime2 />
  </div>
</template>

<script>
// @ts-nocheck

import anime from "./components/Anime.vue";
import anime2 from "./components/Anime2.vue";


export default {
  name: "App",
  components: {
    anime,
    anime2,
  },
};
</script>

<style lang="less">
/* app里不加scoped，就是为了让app成为全局样式 */
/* 全局css设置 */
// 加入语法规范lang，则可以升级为less写法，但是需要npm i less-loader
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
