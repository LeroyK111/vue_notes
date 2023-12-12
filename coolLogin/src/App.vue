<template>
  <article class="bg w-full">
    <section class="" v-show="palmprintVerification">
      
    </section>
    <section v-show="!palmprintVerification">
      <Login></Login>
    </section>
    <footer>
      <powerBy></powerBy>
    </footer>
  </article>
</template>

<script setup lang="ts">
import Login from "./pages/Login.vue";
import powerBy from "./components/powerBy.vue"
import { ref } from "vue";

const palmprintVerification = ref(true);



</script>

<style scoped lang="scss">
.bg {
  width: 100vw;
  height: 100vh;
  background-color: #01182a;
}
</style>
