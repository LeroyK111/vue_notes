<template>
  <div>
    <button @click="startAnime(isShow)">点我驱动蓝色方块运动</button>
    <div class="css-selector-demo">
      <transition>
        <h1 class="el">使用anime三方模块</h1>
      </transition>
    </div>
  </div>
</template>

<script>
// 使用第三方动画模块
import anime from "animejs/lib/anime.es.js";

export default {
  name: "anime3",
  data() {
    return {
      isShow: true,
      screenWidth: document.body.clientWidth,
    };
  },

  methods: {
    startAnime(isShow) {
      let lineIndex = isShow ? this.screenWidth - 200 : 0;
      anime({
        targets: ".css-selector-demo .el",
        translateX: lineIndex,
      });
      this.isShow = !isShow
    },
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.screenWidth = document.body.clientWidth;
    });
  },
};
</script>

<style lang="less" scoped>
.css-selector-demo {
  background-color: orange;

  .el {
    width: 200px;
    background-color: skyblue;
  }
}
</style>
