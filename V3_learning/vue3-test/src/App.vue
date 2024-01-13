<template lang="zh-cn">
  <div class="app">
    <!-- <h1>我是App组件</h1> -->
    <!-- 利用子组件的defineExpose 就可以完成子向父传递消息 -->
    <!-- <Child @add="handleAdd" ref="childRefs"></Child> -->
    

    <NTree
    block-line
    :data="data"
    expand-on-click
    checkable
  />

  </div>
</template>

<script setup>
// import {ref, onMounted} from "vue";
// import Child from "./components/Child.vue";

// 利用事件回调传递消息
// const handleAdd = value => {console.log(value);}
// const childRefs = ref(null)
// onMounted(() => {
//   console.log(childRefs.value.child);
// })

// 引入静态资源，
// ! base64 <img src="data:image/png;base64,iVBYKIGloxxxxxxxxxxxxxxxxxxx...">
// ! import img from '../images/demo.png'
// ! require('../images/demo.png')
// ! 动态绝对路径 <img :src="publicPath + 'images/demo.jpg'" alt="">

// 实验一个新功能
import { NTree } from "naive-ui";

function createData(level = 4, baseKey = "") {
  if (!level) return undefined;
  return repeat(6 - level, undefined).map((_, index) => {
    const key = "" + baseKey + level + index;
    return {
      label: createLabel(level),
      key,
      children: createData(level - 1, key),
    };
  });
}

function createLabel(level) {
  if (level === 4) return "道生一";
  if (level === 3) return "一生二";
  if (level === 2) return "二生三";
  if (level === 1) return "三生万物";
  return "";
}

const data = createData();
</script>

<style>
.app {
  background-color: gray;
  padding: 10px;
}
</style>
