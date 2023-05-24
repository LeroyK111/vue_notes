<template>
  <h1>{{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
  <p>Edit <code>components/HelloWorld.vue</code> to test hot module replacement.</p>

  <button @click="alertClick"></button>
</template>

<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    // 响应式语法糖已经废弃
    // let count2 = $ref()



    return {
      count: 0
    }
  },


  methods: {
    // 不再通过$()转换响应式变量。
    // alertClick(param) {
    //   count2++;
    // }
  },



}
</script>
