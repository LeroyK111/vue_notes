<template>
  姓: <input type="text" v-model="person.firstName" /><br />
  名: <input type="text" v-model="person.lastName" /><br />

  全名:{{ person.fullName }}
  <br>
  全名输入框<input type="text" v-model="person.fullName">
</template>

<script>

import { reactive, computed } from "vue";

export default {
  name: "HelloWorld",
  // 可以继续使用vue2的计算属性，但是我们要用setup
  setup() {
    let person = reactive({
      firstName: "张",
      lastName: "三",
    });

    // 计算属性变成包装函数
    // 简写形式
    // person.fullName = computed(()=>{
    //   return person.firstName + "-" + person.lastName}
    // )

    // 完整写法，考虑读写
    person.fullName = computed({
      get(){
        return person.firstName + "-" + person.lastName
      },
      set(value){
        const nameAll = value.split("-")
        person.firstName = nameAll[0]
        person.lastName = nameAll[1]
      }
    });

    return {
      person,
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
