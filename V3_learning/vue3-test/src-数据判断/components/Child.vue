<template>
<div class="child">
  <h4>我是child组件</h4>
  <son></son>
</div>
</template>

<script>
import Son from "./Son.vue"
export default {
  name: "Child",
  components:{
    Son,
  }
};
</script>

<style scoped>
  .child{
    background-color: skyblue;
  }
</style>
