<template>
  <div id="app">
    <myHeader @receive="receive" />
    <myList :todos="todos" />
    <myFooter
      :todos="todos"
      @checkAllTodo="checkAllTodo"
      @clearAllTodo="clearAllTodo"
    />
  </div>
</template>

<script>
// @ts-nocheck

import myHeader from "./components/myHeader";
import myFooter from "./components/myFooter.vue";
import myList from "./components/myList.vue";

// 通过App进行组件间的交流

let indexData = [
  { id: "001", title: "吃饭", done: true },
  { id: "002", title: "喝酒", done: false },
  { id: "003", title: "开车", done: true },
];

function checkData() {
  let values = JSON.parse(localStorage.getItem("todos"));
  if (values) return values;
  return indexData;
}

export default {
  name: "App",
  components: {
    myHeader,
    myFooter,
    myList,
  },
  // 把数据集放入app中去，状态提升
  data() {
    return {
      todos: checkData(),
    };
  },
  methods: {
    receive(x) {
      // console.log('我是app组件，收到了数据', x);
      this.todos.unshift(x);
    },
    // 取消勾选一个todo
    checkTodo(id) {
      this.todos.forEach((todo) => {
        if (todo.id === id) todo.done = !todo.done;
      });
    },
    // 删除todo
    delTodos(id) {
      this.todos = this.todos.filter((todo) => todo.id != id);
    },

    // 全选or全不选
    checkAllTodo(done) {
      this.todos.forEach((value) => {
        value.done = done;
      });
    },

    // 清除所有已经完成的todo
    clearAllTodo() {
      this.todos = this.todos.filter((value) => !value.done);
    },


    // 修改数据
    updateTodo(id, title){
      this.todos.forEach((value)=>{
        if (value.id === id) value.title = title
      })
    }
  },

  watch: {
    todos: {
      deep: true,
      // 将todos存储到浏览器中
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },

  mounted() {
    this.$bus.$on('checkTodo', this.checkTodo)
    this.$bus.$on('delTodos', this.delTodos)
    this.$bus.$on("updateTodo", this.updateTodo)
  },

  beforeCreate() {
    this.$bus.$off(["checkTodo", "delTodos", "updateTodo"])
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

li {
  list-style: none;
}

input {
  outline: none;
}

#app {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-content: center;
  width: 800px;
  height: 300px;
  margin: 0 auto;
  border: 2px solid #ccc;
  border-radius: 10px;
}
</style>
