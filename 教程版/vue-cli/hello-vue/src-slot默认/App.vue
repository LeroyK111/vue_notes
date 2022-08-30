<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <category title="美食">
    <img src="https://cf.dtcj.com/da2ed518-bd9a-49b4-8fa4-106aafd6133f.jpg" alt=""> 
    </category>
    <category title="游戏">
    <ul>
      <li v-for="(value, index) of games" v-text="value" :key="index"></li>
    </ul>
    </category>
    <category title="电影">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
// @ts-nocheck

import Category from "./components/Category.vue";



export default {
  name: "App",
  data() {
    return {
      foods:["火锅","烧烤","炖汤"],
      games:["LOL", "3A"],
      films:["教父", "电影", "李焕英"],
    }
  },
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
img {
  width: 100%;
}
video {
  width: 100%;
}

.app {
  display: flex;
  justify-content: space-around;
}
</style>
