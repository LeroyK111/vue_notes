<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义插槽 -->
    <slot>默认值</slot>
  </div>
</template>

<script>

/*
  vue2里$atter 可以获得传参。而不必需要props
  $slot 也可以获得插槽内的标签，
  */
export default {
  name: "category",
  data() {
    return {};
  },
  props: ["title"],
};
</script>

<style lang="less" scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
  text-align: center;

  h3 {
    background-color: orange; 
  }

  ul {
    list-style: none;
  }
}
</style>
