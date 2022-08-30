<template>
  <h2>姓名:{{ name }}</h2>
  <h2>姓名:{{ age }}</h2>
  <h2>工作:{{ job }}</h2>

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
import { ref, reactive } from "vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  setup() {
    /*
    !支持深度监视和列表索引修改。！！！
    
    */
    let name = ref("张三");
    let age = ref(18);
    // 直接转换成Proxy,跳过了refimpl，不用value
    let job = reactive({
      type: "前端开发",
      salary: "30k",
    });

    // 方法
    function changeInfo() {
      console.log(name);
      name.value = "李四";
      age.value = 20;
      console.log(job);
      console.log(job.type);
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
