<template>
  <div class="category">
    <h3>{{title}}分类</h3>
    <!-- 定义插槽 -->
    <slot name="center">默认值</slot>
    <slot name="footer">默认值</slot>
  </div>
</template>

<script>
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
