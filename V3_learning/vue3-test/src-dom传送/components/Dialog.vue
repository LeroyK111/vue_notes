<template>
  <div>
    <button @click="isShow = true">点我弹窗</button>
    <teleport to="body">
      <!-- 直接把dom元素传送到其他css标签内支持，id和class -->
      <div v-if="isShow" class="mask">
        <div class="dialog" >
          <span>我是一个弹窗</span><br>
          <button @click="isShow = !isShow">关闭弹窗</button>
        </div>
      </div>
    </teleport>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Dialog",
  setup() {
    let isShow = ref(false);
    return { isShow };
  },
};
</script>

<style>
.mask {
  position: absolute;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
}
.dialog {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background-color: green;
  text-align: center;
}
</style>
