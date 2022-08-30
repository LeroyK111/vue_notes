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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
