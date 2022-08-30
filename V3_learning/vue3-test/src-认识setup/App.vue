<template>
  <h2>姓名:{{ name }}</h2>
  <h2>姓名:{{ age }}</h2>
  <button @click="sayHello">点我弹窗</button>
  <button @click="text">测试以下vue2的方式能不能读取vue3的方法</button>
  <!-- 完全不推荐vue2和vue3混用 -->
  <button @click="test">测试以下vue3能不能读取vue的方法</button>

  <!-- 可以没有根标签，不需要div -->
  <HelloWorld />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { h } from "vue";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  methods: {
    text() {
      console.log(this.name);
      this.sayHello();
    },
  },
  setup() {
    // 数据
    let name = "张三";
    let age = 18;

    // 方法
    function sayHello() {
      alert("我是一个方法");
    }
    function test() {
      this.text()
    }

    // 返回一个对象
    return {
      name,
      age,
      sayHello,
    };

    // 返回一个函数
    // return ()=>h('h1', "reader用法一致")
  },
};
</script>

<style></style>
