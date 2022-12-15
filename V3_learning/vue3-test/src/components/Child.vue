<template>
  <div class="child">
    <span>{{ a }}</span>
    <Func/>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Func from "./Func";
let a = ref("原始数据");
</script>

<style scoped>
.child {
  background-color: skyblue;
}
</style>
