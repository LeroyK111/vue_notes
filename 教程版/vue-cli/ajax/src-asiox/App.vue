<template>
  <div id="app">
    <Serach></Serach>
    <List/>
  </div>
</template>

<script>
import List from "./components/List.vue";
import Serach from "./components/Serach.vue";


export default {
  name: "App",
  components: {
    List,
    Serach,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

#app {
  margin: 0 auto;
  width: 90vw;
}

a {
  text-decoration: none;
}
input {
  outline: none;
}
</style>
