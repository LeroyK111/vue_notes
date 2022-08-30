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
import { reactive, computed, ref, watch } from "vue";

export default {
  name: "HelloWorld",
  // 可以继续使用vue2的监视属性，但是我们要用setup
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

    // 监视ref对象
    /*
    ref只有遇到Obj数据时，才会强制变换成reactive。。。
    然后就开始坑了,需要开启deep。
    */

    // 情况一，只能监视ref单个响应式数据，多个监视，可以写多个watch。。。。
    // watch(sum, (newValue, oldValue) => {
    //   console.log("sum值变化了", newValue, oldValue);
    // });

    // 情况二，我监视多个数据，就是写多个watch
    // watch(msg, (newValue, oldValue) => {
    //   console.log("msg值变化了", newValue, oldValue);
    // });

    // 情况三,监视多个数据，顺便可以传入配置
    // watch([msg, sum], (newValue, oldValue) => {
    //   console.log("数组值变化了", newValue, oldValue);
    // },{immediate:true});






    // 监视对象reactive
    /*
    大坑1，此处无法正确获取oldValue。
    大坑2，无法关闭deep
    大坑3，监视嵌套对象时，还需要再次开启deep。。。但是依然无法正确获取oldValue
    */
    // watch(person, (newValue, oldValue)=>{
    //   console.log("监视reactive", newValue, oldValue);
    // })

    // 监视对象中的某个属性
    // watch(()=>person.age, (newValue, oldValue)=>{
    //   console.log("监视person.age", newValue, oldValue);
    // })

    // 情况五
    // watch([() => person.age, () => person.name], (newValue, oldValue) => {
    //   console.log("监视person.age", newValue, oldValue);
    // });

  // 嵌套监视。反而需要开启deep,同样oldValue会出现问题
    watch(() => person.job, (newValue, oldValue) => {
      console.log("监视person.age", newValue, oldValue);
      // 常用的初次监听immediate
    }, {deep:true, immediate: true});

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
