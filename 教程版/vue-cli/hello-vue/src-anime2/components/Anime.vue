<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 自定义标签内容appear -->
    <transition name="hello" appear>
      <h1 v-show="isShow">你好啊！</h1>
    </transition>
  </div>
</template>

<script>
export default {
  name: "anime1",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

/* transition标签内属性，v(name)-enter-active */
.hello-enter-active {
  animation: identifier .5s;
}

.hello-leave-active {
  animation: identifier .5s reverse;
}

@keyframes identifier {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
}
</style>
