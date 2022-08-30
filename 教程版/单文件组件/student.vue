<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h2>学生名称: {{ name }}</h2>
    <h2>学生年龄: {{ age }}</h2>
    <button @click="showName">点我提示学生名</button>
  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "student",
  data() {
    return {
      name: "张三",
      age: 18,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
</style>
