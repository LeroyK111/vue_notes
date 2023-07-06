<template>
  <div>
    <button @click="log">{{ msg }}</button>
  </div>
</template>

<script setup>

// 变量
const msg = 'Hello!'

// 函数
function log() {
  console.log("我是方法")
}

// 暴露语法
defineExpose({msg, log})
</script>

<style lang="scss" scoped></style>