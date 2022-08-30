<template>
  <h3>求和{{ sum }}</h3>
  <button @click="sum++">点我sum++</button>
  <hr />
  <h2>{{ person.name }}</h2>
  <h2>{{ person.age }}</h2>
  <h2>{{ person.job.msg }}</h2>
  <h2 v-show="person.car">{{ person.car }}</h2>
  <button @click="person.name += '@'">修改姓名</button>
  <button @click="person.age++">修改年龄</button>
  <button @click="person.job.msg += '@'">修改msg</button>
  <hr />
  <button @click="addCard">给人添加一台车</button>
  <button @click="changePrice">改变车的价格</button>
</template>

<script>
import { markRaw, reactive, ref, toRaw } from "vue";

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
    let sum = ref(0);

    // 转变成普通对象
    // person = toRaw(person)
    // console.log(person);

    // 给对象添加属性
    function addCard(params) {
      let car = { name: "奔驰", price: 40 };
      // 包装成不响应的，不然默认会再次包装成响应的
      person.car = markRaw(car);
    }
    function changePrice(params) {
      person.car.price++
      console.log(person.car.price);
    }

    return {
      person,
      sum,
      addCard,
      changePrice
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
