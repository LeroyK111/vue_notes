<template>
  <article class="bg">
    <aside class="grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </aside>
    <section @click="AuthLogin" class="hands" v-show="palmprintVerification">
      <div class="backlight">
        <img class="hand" :src="hand" alt="" />
        <img class="aureole" :src="light" alt="" />
      </div>
    </section>
    <section :class="!palmprintVerification ? 'loginShow' : 'loginHidden'">
      <Login :show="!palmprintVerification"></Login>
    </section>
    <footer>
      <powerBy></powerBy>
    </footer>
  </article>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import powerBy from "./components/powerBy.vue";
import hand from "./assets/imgs/palmprint/hand.svg";
import light from "./assets/imgs/palmprint/light.svg";
import { ref } from "vue";
import useSyntheticSpeech from "./hooks/useSyntheticSpeech.ts";
const palmprintVerification = ref(true);

const lock = ref(true);

const aiSound = useSyntheticSpeech();

// 监听touch事件，展示用click
const AuthLogin = () => {
  if (lock) {
    lock.value = false;
    const tips =
      "刘凯，高级驾驶员, 北京市第三交通委提醒您：道路千万条，安全第一条，行车不规范，亲人两行泪。";
    aiSound.runSyntheticSpeech(tips);
    setTimeout(() => {
      palmprintVerification.value = false;
    }, 3000);
  }
};
</script>

<style scoped lang="scss">
.bg {
  // 背景改造
  width: 100vw;
  height: 100vh;
  background: #01182a;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* 让子元素保持3d */
  transform-style: preserve-3d;

  // 网格
  .grid {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vw;
    z-index: 1;
    background-color: transparent;
    display: grid;
    animation: grid3dAnime 30s linear infinite;
    // 回头就不要边框
    border: rgba($color: white, $alpha: 0.4) solid 1px;
    // 

    @keyframes grid3dAnime {
      0% {
        transform: rotate3d(0deg, 0deg, 0deg);
        border: rgba($color: white, $alpha: 0.1) solid 1px;
      }

      20% {
        border: rgba($color: white, $alpha: 0.2) dashed 1px;
      }

      40% {
        border: rgba($color: white, $alpha: 0.4) solid 1px;
      }

      60% {
        border: rgba($color: white, $alpha: 0.6) solid 1px;
      }

      80% {
        border: rgba($color: white, $alpha: 0.8) dashed 1px;
      }

      100% {
        transform: rotate3d(0deg, 0deg, 360deg);
        border: rgba($color: white, $alpha: 0.9) solid 1px;
      }
    }
  }

  section {
    width: 100%;
    height: 96%;
    background-color: transparent;
    transition: opacity 1s;
  }

  .loginShow {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    opacity: 1;
  }
  .loginHidden {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    opacity: 0;
  }

  .hands {
    display: flex;
    align-items: center;
    justify-content: center;

    .backlight {
      display: flex;
      align-items: center;
      justify-content: center;
      background: radial-gradient(
        rgba($color: white, $alpha: 0.18) 0%,
        rgba($color: white, $alpha: 0) 70%,
        rgba($color: #01182a, $alpha: 1) 100%
      );
      width: 40vw;

      &::before {
        // 扫描光柱
        content: "";
        z-index: 3;
        position: absolute;
        top: 10%;
        left: 50%;
        width: 40vw;
        height: 2%;
        border-radius: 10px;
        background: radial-gradient(
          rgba($color: white, $alpha: 0.6) 0%,
          rgba($color: white, $alpha: 0.1) 70%,
          rgba($color: white, $alpha: 0) 100%
        );
        animation: scanningLightColumnWhite linear infinite 7s alternate;
        transform: translateX(-50%) !important;
      }

      &:hover {
        // 改变扫描光柱的颜色
        &::before {
          background: radial-gradient(
            rgba($color: red, $alpha: 0.6) 0%,
            rgba($color: red, $alpha: 0.1) 70%,
            rgba($color: red, $alpha: 0) 100%
          );
          animation: scanningLightColumnRed linear 3s forwards;
        }

        // 光环从大到小，一直旋转
        .aureole {
          animation: aureoleAnimation1 1.5s 1 forwards linear,
            aureoleAnimation2 60s linear infinite;
        }
      }
    }

    .aureole {
      z-index: 1;
      position: absolute;
      width: 48vw;
      opacity: 0;
    }

    // 从最大到最小
    @keyframes aureoleAnimation1 {
      0% {
        opacity: 1;
        transform: scale(105%);
      }

      20% {
        opacity: 0.5;
      }

      40% {
        opacity: 0;
      }

      60% {
        opacity: 0.3;
        transform: scale(95%);
      }

      80% {
        opacity: 0.7;
      }

      100% {
        opacity: 1;
        transform: scale(100%);
      }
    }

    @keyframes aureoleAnimation2 {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .hand {
      width: 100%;
      animation: handSenseBreath 4s linear infinite alternate;
      transition: all 0.5s linear;
      position: relative;
      z-index: 2;
    }

    @keyframes scanningLightColumnWhite {
      0% {
        top: 10%;
      }

      100% {
        top: 83%;
      }
    }

    @keyframes scanningLightColumnRed {
      0% {
        top: 10%;
      }

      100% {
        top: 83%;
      }
    }

    // 手掌变化
    @keyframes handSenseBreath {
      0% {
        opacity: 0.1;
        transform: scale(98%) translate(5px, 5px) rotateY(180deg);
      }

      20% {
        opacity: 0.3;
      }

      40% {
        opacity: 0.5;
      }

      60% {
        opacity: 0.7;
      }

      80% {
        opacity: 0.85;
      }

      100% {
        opacity: 1;
        transform: scale(102%) translate(-5px, -5px) rotateY(180deg);
      }
    }
  }

  footer {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
  }
}
</style>
