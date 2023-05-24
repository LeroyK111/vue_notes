<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
    <!-- 给插槽传值 -->
    <slot :games="games" :msg="msg">作用域插槽</slot>
  </div>
</template>

<script>
export default {
  name: "category",
  data() {
    return {
      games: ["LOL", "3A", "王者荣耀", "CSgo"],
      msg:"再传个值"
    };
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
