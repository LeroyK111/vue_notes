<template>
  <!-- 使用快捷键生成模板<vue -->
  <div class="app">
    <category title="游戏">
      <!-- 通过template，就可以让子组件的插槽传递实参给，这里的value形参了。对象的形式 -->
      <template scope="values">
        {{values}}
        <ul>
          <li v-for="(value, index) of values.games" v-text="value" :key="index"></li>
        </ul>
      </template>
    </category>
    <category title="游戏">
      <template scope="values">
        <ol>
          <li v-for="(value, index) of values.games" v-text="value" :key="index"></li>
        </ol>
      </template>
    </category>
    <category title="游戏">
      <!-- 新api，结构赋值 -->
      <template slot-scope="{games}">
        <h4>
          <li v-for="(value, index) of games" v-text="value" :key="index"></li>
        </h4>
      </template>
    </category>
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
