<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <Category/>
  </div>
</template>

<script>
// @ts-nocheck

import Category from "./components/Category.vue";

export default {
  name: "App",

  components: {
    Category,
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
a {
  text-decoration: none;
}
img {
  width: 100%;
}
video {
  width: 100%;
}

.app,
.foot {
  display: flex;
  justify-content: space-around;
}
</style>
