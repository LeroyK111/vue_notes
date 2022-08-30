<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生名称: {{ name }}</h2>
    <h2>学生年龄: {{ myage }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="sendSchool">把学生信息给school组件</button>
  </div>
</template>

<script>
// 引入消息组件
import pubsub from "pubsub-js";

// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "student",
  data() {
    return {
      msg: "混入，两个组件共享一个生命环节",
      name: "李四",
      myage: 18,
      gender: "男",
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
    sendSchool() {
      // 发布消息到hello
      pubsub.publish("hello", 666);
    },
  },
};
</script>

<style scoped>
/* 加入scoped就可以将样式锁定组件中,彻底避免冲突 */
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
</style>
