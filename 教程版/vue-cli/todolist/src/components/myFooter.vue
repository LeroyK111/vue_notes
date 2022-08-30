<template>
  <div id="footer" v-show="total">
    <input type="checkbox" name="" id="" :checked="isAll" @change="checkAll" />
    <!-- 也可以直接v-modle -->
    <span>&nbsp;已完成{{ doneTotal }}/全部{{ total }}</span>
    <button id="btn" @click="clearAll">清除已经完成任务</button>
  </div>
</template>

<script>
// @ts-nocheck

export default {
  name: "myFooter",
  computed: {
    isAll() {
      // 计算属性自己调用自己
      return this.doneTotal === this.total && this.total > 0;
    },
    total() {
      return this.todos.length;
    },

    // eslint-disable-next-line vue/return-in-computed-property
    doneTotal() {
      return this.todos.reduce(
        (pre, current) => pre + (current.done ? 1 : 0),
        0
      );
    },
  },
  methods: {
    checkAll(e) {
      this.$emit("checkAllTodo", e.target.checked);
    },

    clearAll() {
      this.$emit("clearAllTodo");
    },
  },
  props: ["todos"],
};
</script>

<style scoped>
#footer {
  width: 700px;
  height: 50px;
  text-align: left;
  line-height: 50px;
  padding-left: 10px;
  position: relative;
}

#btn {
  position: absolute;
  height: 40px;
  width: 150px;
  background-color: #d54e45;
  color: #fff;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  border: none;
  border-radius: 5px;
  top: 5px;
  right: 10px;
}
</style>
