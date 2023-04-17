<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校年龄: {{ myage }}</h2>
    <!-- 通过父组件给子组件传递函数，子组件的props接收到后，调用函数即可 -->
    <button @click="sendApp">把学校名给APP</button>
  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "school",
  data() {
    return {
      name: "测试大学",
      myage: 18,
    };
  },
  props:["getSchoolName"],
  methods: {
    sendApp(){
      this.getSchoolName(this.name)
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
