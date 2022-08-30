<template>
  <h2>当前求和为:{{ sum }}</h2>
  <button @click="sum++">点我加一</button>
  <hr />
  <h2>当前的信息为{{ msg }}</h2>
  <button @click="msg += '!'">修改信息</button>
  <hr />
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{person.job.msg}}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.msg+='@'">修改msg</button>

</template>

<script>
import { reactive, computed, ref, watch, watchEffect } from "vue";

export default {
  name: "HelloWorld",
  setup() {
    let sum = ref(0);
    let msg = ref("你好啊");
    let person = reactive({
      name: "占山",
      age: 12,
      job: {
        msg: "监视深层次的变换，还需要开启deep",
      },
    });

    // 普通监视
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum值变化了", newValue, oldValue);
    // }, {immediate:true});

    // 我用到谁，谁就被监视了
    /*
    1.像computed，但是不必写return。注重过程
    */
    watchEffect(()=>{
      const x1 = sum.value
      console.log("我被执行了");
    })

    return {
      sum,
      msg,
      person,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
