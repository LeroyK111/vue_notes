<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h2>学校名称: {{ name }}</h2>
    <h2>学校年龄: {{ myage }}</h2>
  </div>
</template>

<script>
import pubsub from "pubsub-js";
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
  mounted() {
    // 订阅消息
    this.pubid = pubsub.subscribe("hello",(adderss, ...args)=>{
      console.log(adderss, args);
      this.myage = args[0]
    });
  },
  beforeCreate() {
    // 取消订阅
    pubsub.unsubscribe(this.pubid)
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
