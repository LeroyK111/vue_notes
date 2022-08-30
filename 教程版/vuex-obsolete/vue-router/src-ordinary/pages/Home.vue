<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "我是HOME",
    };
  },

  beforeDestroy() {
    console.log("Home即将被销毁了");
  },
  beforeCreate() {
    console.log("Home被生成了");
  },
   mounted(){
    /*
    1.每个组件都有自己的$route属性，存储着自己的路由信息
    2.但是公用一个路由器
    */
    window.homeRoute = this.$route
    window.homeRouter = this.$router
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
