<template>
  <ul>
    <li :style="{opacity}">欢迎学习VUE</li>
    <li>new1 <input type="text"></li>
    <li>new2 <input type="text"></input></li>
    <li>new3 <input type="text"></input></li>
  </ul>
</template>

<script>

export default {
  name: "News",
  data() {
    return {
      opacity : 1
    }
  },
  mounted() {
  console.log('mounted');
  },


  // vue-router专用生命周期
  activated(){
    console.log('我被激活了');
    // 我们在这里开启定时器
  this.timer = setInterval(() => {
        this.opacity -= 0.01;
        if (this.opacity <= 0) this.opacity = 1;
  }, 16)
  },

  deactivated(){
    console.log('我挂了');
    clearInterval(this.timer);
  }
};
</script>

<style></style>
