<template>
  <div class="yhlTitle">
    <div class="logo">
      <img class="circleMark" :src="circleMark" alt="" />
      <img class="ringBase" :src="ringBase" alt="" />
    </div>
    <p class="title">云海流</p>
  </div>
</template>

<script setup lang="ts">
import circleMark from "../assets/imgs/circleMark.png";
import ringBase from "../assets/imgs/ringBase.png";




</script>

<style scoped lang="scss">
.yhlTitle {
  display: flex;
  padding-bottom: 1vw;
  align-items: center;
  justify-content: space-around;
  width: 6vw;
  position: relative;
  overflow: hidden;
  border-radius: 10%;

  &::after {
    content: "";
    width: 1vw;
    height: 10vw;
    position: absolute;
    top: -2vw;
    left: -2.5vw;
    background: rgba(255, 255, 255, 0.39);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.9px);
    -webkit-backdrop-filter: blur(6.9px);
    background-color: hsla(0, 0%, 100%, 0.314);
  }

  &:hover {
    &::after {
      animation: sparkle 0.2s linear 1;
    }
  }

  @keyframes sparkle {
    0% {
      transform: translateX(0vw) rotateZ(-45deg);
    }

    100% {
      transform: translateX(10vw) rotateZ(-45deg);
    }
  }

  @font-face {
    font-family: "yunhailiu";
    src: url("../assets/fonts/平方怀古体.ttf") format("truetype");
  }

  .title {
    font: 1.2rem "yunhailiu";
    color: white;
  }

  .logo {
    display: flex;
    flex-direction: column;
    align-items: center;

    .circleMark {
      width: 2vw;
      animation: aureoleAnimation2 linear infinite 5s;
    }

    .ringBase {
      width: 2.5vw;
    }
  }
}
</style>
