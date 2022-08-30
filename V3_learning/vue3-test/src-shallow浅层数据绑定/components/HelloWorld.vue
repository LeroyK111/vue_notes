<template>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.msg }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.msg += '@'">修改msg</button>

  <hr />
  <h4>当前的x是{{ x }}</h4>
  <button @click="x++">点我x++</button>
</template>

<script>
import { reactive, ref, shallowReactive, shallowRef } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    // 浅层对象绑定，只考虑第一层
    let person = shallowReactive({
      name: "占山",
      age: 12,
      job: {
        // msg就失去响应式了
        msg: "监视深层次的变换，还需要开启deep",
      },
    });

    // let x = ref(0);
    // 单层数据没影响，对象则全部失去响应式
    let x = shallowRef(0);
    
    // 适合性能优化
    return {
      person,
      x,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
