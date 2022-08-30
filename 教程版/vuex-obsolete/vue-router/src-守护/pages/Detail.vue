<template>
  <ul>
    <li>消息编号{{$route.params.id}}</li>
    <li>消息内容{{$route.params.title}}</li>
    <!-- <li>{{a}}</li>
    <li>{{b}}</li> -->
    <li>{{id}}</li>
    <li>{{title}}</li>

  </ul>
</template>

<script>
// 使用路由的映射props，解决$route过长的问题

export default {
  name:"Detail",
  mounted(){
    console.log(this.$route);
  },
  // props:['a', 'b']
  props:['id', 'title']
}
</script>

<style>

</style>