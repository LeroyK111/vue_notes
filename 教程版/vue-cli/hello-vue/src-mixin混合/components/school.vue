<template>
  <!-- 我们写个组件html -->
  <div class="demo1">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学校名称: {{ name }}</h2>
    <h2>学校年龄: {{ myage }}</h2>
  </div>
</template>

<script>

import { mixin } from "./mixin";
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "school",
  data() {
    return {
      msg: "混入",
      name: "测试大学",
      myage: 18,
    };
  },
  methods:{
    showName(){
      console.log("我不会被混合取代");
    }
  },
  mounted(){
    console.log("生命周期");
  },
  // 局部混合，组件中已有的配置选项混合不会替代，只会补充没有的选项和数据
  mixins:[mixin],
  // 但是生命周期，会被重复调用，一定要注意位置
  
};
</script>

<style>
/* 组件的样式 */
.demo1 {
  width: 200px;
  height: 300px;
  background-color: pink;
}
</style>
