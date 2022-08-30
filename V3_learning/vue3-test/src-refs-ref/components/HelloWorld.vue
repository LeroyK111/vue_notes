<template>
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.msg }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.msg += '@'">修改msg</button>
  <hr />
  <h2>{{ name1 }}</h2>
  <button @click="name1 += '@'">修改姓名</button>
  <hr />
  <h2>{{ name2 }}</h2>
  <button @click="name2 += '@'">修改姓名</button>
  <hr />
  <h1>原始对象{{ person }}</h1>
  <h2>{{ name3 }}</h2>
  <button @click="name3 += '@'">修改姓名</button>
  <hr />
  <h1>使用refs</h1>
  {{ a }} <br />
  {{ test }}
  {{ test.msg }}

</template>

<script>
import {
  reactive,
  computed,
  ref,
  watch,
  watchEffect,
  toRef,
  toRefs,
} from "vue";

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

    let person1 = reactive({
      a: "死亡",
      test: {
        msg: "嵌套死亡F",
      },
    });

    // 这就是直接赋值了，无法响应式
    const name1 = person.name;
    // console.log(name1);
    // 必须包装之后，才能存在响应式
    const name2 = toRef(person, "name");
    // console.log(name2);

    // 批量包装
    const x = toRefs(person1);
    console.log(x);

    return {
      person,
      name1,
      name2,
      // 不要直接ref，会生成一个新对象，但是原始person不会跟着改变
      name3: ref(person.name),
      // 导入对象，记住命名最好不要冲突
      ...x,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
