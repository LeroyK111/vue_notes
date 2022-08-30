<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
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
      name: "测试大学",
      myage: 18,
    };
  },
  // 生命周期
  mounted() {
    // 在总线上，把绑定一个事件，
    this.$bus.$on("hello", (...data) => {
      console.log("我是school组件,收到了数据", ...data);
    });
  },
  // 生命周期被终结
  beforeDestroy() {
    // 必须帮忙销毁$bus中的事件销毁，不然全局事件总线臃肿
    this.$bus.$off(["hello"]);
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
