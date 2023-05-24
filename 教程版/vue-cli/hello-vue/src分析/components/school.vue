<template>
  <!-- 我们写个组件html -->
  <div class="demo1">
    <h2>学校名称: {{ schoolname }}</h2>
    <h2>学校名称: {{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "school",
  data() {
    return {
      schoolname: "华东大学",
      address: "北京",
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
