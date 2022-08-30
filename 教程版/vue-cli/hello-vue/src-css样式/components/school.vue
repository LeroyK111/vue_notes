<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学校名称: {{ name }}</h2>
    <h2>学校年龄: {{ myage }}</h2>
  </div>
</template>

<script>
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
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style scoped>
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: pink;
}
</style>
