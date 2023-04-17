<template>
  <li>
    <input
      type="checkbox"
      name=""
      id=""
      :checked="todo.done"
      @change="handleCheck(todo.id)"
    />
    <!-- 以下也可以实现，但是违反规则 -->
    <!-- <input type="checkbox" v-model="todo.done"></input> -->
    <span v-show="!todo.isEdit">&nbsp;{{ todo.title }}</span>
    <input
      v-show="todo.isEdit"
      type="text"
      class="update-title"
      :value="todo.title"
      @blur="handleBlue(todo, $event)"
      ref="inputFocus"
    />
    <button v-show="!todo.isEdit" id="btn-update" @click="update(todo)">
      编辑该项
    </button>
    <button id="btn" @click="del(todo.id)">删除该项</button>
  </li>
</template>

<script>
export default {
  name: "myItem",
  // props只读，但是对象内一部分修改，vue推荐这样写
  props: ["todo"],
  methods: {
    handleCheck(id) {
      // 通知app组件将todos对象done值取反
      this.$bus.$emit("checkTodo", id);
    },
    del(id) {
      if (confirm("确定删除?")) {
        // 通知app组件，将todos对象删除
        this.$bus.$emit("delTodos", id);
      }
    },
    update(todo) {
      // eslint-disable-next-line no-prototype-builtins
      if (!todo.hasOwnProperty("isEdit")) {
        this.$set(todo, "isEdit", true);
      } else {
        todo.isEdit = true;
        // $nextTick 这里的函数，会使页面二次渲染。
        this.$nextTick(function () {
          this.$refs.inputFocus.focus();
        });
      }
    },
    handleBlue(todo, e) {
      todo.isEdit = false;
      if (!e.target.value.trim()) return alert("输入不能为空");
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
</script>

<style scoped>
li {
  position: relative;
  width: 700px;
  height: 50px;
  line-height: 50px;
  padding-left: 10px;
  font-size: 16px;
}

li:nth-child(n-2) {
  border-bottom: 1px solid #ccc;
}

li button {
  display: none;
}

li:hover {
  background-color: #bbc;
}
li:hover button {
  display: block;
}

.update-title {
  font-size: 16px;
}

#btn {
  position: absolute;
  top: 5px;
  right: 5px;
  width: 60px;
  height: 40px;
  background-color: darksalmon;
  border: none;
  cursor: pointer;
}

#btn-update {
  position: absolute;
  top: 5px;
  right: 75px;
  width: 60px;
  height: 40px;
  background-color: greenyellow;
  border: none;
  cursor: pointer;
}
</style>
