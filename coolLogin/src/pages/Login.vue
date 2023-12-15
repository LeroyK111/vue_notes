<template>
  <div class="login">
    <header>
      <p :class="show? 'animeRun': ''">主页面未完成......</p>
    </header>
    <article>
      <section></section>
    </article>
  </div>
</template>

<script setup lang="ts">
import uselodash from "../hooks/useLodash";
// @ts-ignore
const _ = uselodash();
defineProps(["show"]);

</script>

<style scoped lang="scss">
.login {
  background-color: rgba($color: #000000, $alpha: 0.3);
  width: 98%;
  height: 95%;
  margin: 0.8vw;
  padding: 0.1vw;

  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes effect {
    50% {
      border-color: transparent;
    }
  }

  header {
    color: white;
    margin-top: 1px;
    border-left: 0.125rem solid #11d6d6;
    padding: 1rem 1rem 1rem 1.125rem;
    background: linear-gradient(90deg,rgba(43,237,237,.15),rgba(43,237,237,.05));
  }
}

.animeRun {
  width: 12em;
  white-space: nowrap;
  overflow: hidden;
  animation: typing 2s steps(12), effect 0.5s step-end infinite alternate;
}
</style>
