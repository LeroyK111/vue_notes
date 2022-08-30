<template>
  <div class="son">
    <h2>我是孙子</h2>
    <Dialog></Dialog>
  </div>
</template>

<script>
import Dialog from "./Dialog.vue";
export default {
  name: "Son",
  components: { Dialog },
};
</script>

<style scoped>
.son {
  background-color: pink;
}
</style>
