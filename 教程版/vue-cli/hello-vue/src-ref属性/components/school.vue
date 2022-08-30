<template>
  <!-- 我们写个组件html -->
  <div class="demo1">
    <h2>地方: {{ schoolname }}</h2>
    <h2>企业名称: {{ address }}</h2>
    <button @click="showName">点我提示地方名</button>
  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "school",
  data() {
    return {
      schoolname: "海南",
      address: "东城",
    };
  },
  methods: {
    showName() {
      alert(this.schoolname);
    },
  },
};
</script>

<style>
/* 组件的样式 */
/* 有个bug，多个组件样式是共享的，需要重新命名 */
.demo1 {
  width: 200px;
  height: 300px;
  background-color: pink;
}
</style>
