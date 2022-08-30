<template>
  <div id="app">
    <HelloWorld/>
    <TextWorld></TextWorld>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TextWorld from './components/TextWorld.vue'


export default {
  name: 'App',
  components: {
    HelloWorld,
    TextWorld
  },
}
</script>

<style lang="less">
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
