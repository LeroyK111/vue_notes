<template>
  <div>
    <h1>路由守卫，说白了，就是验证权限，权限不够直接重定向</h1>

    <div>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="goSteps">测试go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bunner",
  methods: {
    back() {
      this.$router.back();
    },
    forward() {
      this.$router.forward();
    },
    goSteps(){
      // 前进后退
      this.$router.go(3);
    }
  },
};
</script>

<style></style>
