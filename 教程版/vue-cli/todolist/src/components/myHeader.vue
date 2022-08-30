<template>
  <div class="search">
    <input
      type="text"
      placeholder="请输入内容，回车写入事务"
      v-model="word"
      @keyup.enter="add"
    />
  </div>
</template>

<script>
// 我们使用nanoid生成唯一id
import { nanoid } from "nanoid";

export default {
  name: "myHeader",
  data() {
    return {
      word: "",
    };
  },
  methods: {
    add() {
      if (!this.word.trim()) return alert("输入不能为空")
      // console.log(this.word);
      // 包装成为todoObj
      const todoObj = { id: nanoid(), title: this.word, done: false };
      // 调用事件
      this.$emit("receive", todoObj)
      // 清空输入栏
      this.word = '';
    },
  },

  props: ["receive"],
};
</script>

<style scoped>
.search {
  width: 700px;
  height: 40px;
  margin-bottom: 10px;
}
.search input {
  padding: 0 10px;
  width: 100%;
  height: 100%;
  border: none;
  border-bottom: 1px solid skyblue;
  border-radius: 4px;
}

.search input:focus {
  box-shadow: 0 4px 3px skyblue;
}
</style>
