<template>
  <div>
    <button @click="getStudent">点我获取学生信息</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data() {
    return {
      name: "测试中",
    };
  },
  methods: {
    // 
    getStudent() {
      // 使用代理服务器，
      axios.get("http://localhost:8080/api/").then(
        (res) => {
          console.log("请求成功了", res.data);
        },
        (error) => {
          console.log("请求失败了", error.message);
        }
      );
    },
  },
};
</script>

<style></style>
