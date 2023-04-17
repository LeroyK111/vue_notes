<template>
  <ul id="ul">
    <my-item
      v-for="todoObj in todos"
      :key="todoObj.id"
      :todo="todoObj"
    ></my-item>
  </ul>
</template>

<script>
import myItem from "./myItem.vue";
export default {
  name: "myList",

  components: {
    myItem,
  },

  props: ["todos"],
};
</script>

<style scoped>
#ul {
  overflow: hidden scroll;
  margin-bottom: 10px;
  width: 700px;
  height: 150px;
  border: 1px solid #ccc;
}

/* 将滚动条设成0 */
#ul::-webkit-scrollbar {
  height: 0;
  width: 0;
}
</style>
