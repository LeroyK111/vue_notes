<template>
  <h3>求和{{ sum }}</h3>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.msg }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.msg += '@'">修改msg</button>
</template>

<script>
import { reactive, readonly, ref, shallowReadonly } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    let person = reactive({
      name: "占山",
      age: 12, 
      job: {
        msg: "监视深层次的变换，还需要开启deep",
      },
    });

    /*
    适用场景，接收别人的数据保护起来
    */
    // 阻止数据改变
    // person = readonly(person)

    // 只保护浅层数据，深层数据可以改
    // person = shallowReadonly(person)



    let sum = ref(0);
    return {
      person,
      sum,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
