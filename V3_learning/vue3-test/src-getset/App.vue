<template>
  <h2>姓名:{{ name }}</h2>
  <h2>姓名:{{ age }}</h2>
  <h2>{{job}}</h2>
  <button @click="changeInfo">点我修改姓名</button>
  <!-- 可以没有根标签，不需要div -->
  <HelloWorld />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

/*
包装属性:
refimpl 引用实现构造函数
*/
import { ref } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    // 数据
    let name = ref("张三");
    let age = ref(18);
    let job = ref({
      type: "前端开发",
      salary: "30k",
    });

    // 方法
    function changeInfo() {
      console.log(name);
      name.value = "李四";
      age.value = 20;
      job.value.type = "nodejs工程师";
      job.value = {...job.value, ...{type:"测试工程", salary:"30k"}}
    }

    // 返回一个对象
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

<style></style>
