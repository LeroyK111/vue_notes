<template>
  <div class="hello">
    <h1>{{msg}}</h1>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      msg: "我是About",
    };
  },
  mounted(){
    window.aboutRoute = this.$route
    window.aboutRouter = this.$router
  },

  // 组件内不路由前置,路由进入触发
  beforeRouteEnter(to, from, next){
    console.log("进入到了About");
    next()
  },
  // 离开路由触发
  beforeRouteLeave(to, from, next){
    console.log("离开了About");
    next()
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
