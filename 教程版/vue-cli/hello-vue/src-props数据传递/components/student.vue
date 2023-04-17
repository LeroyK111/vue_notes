<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>学生名称: {{ name }}</h2>
    <h2>学生年龄: {{ myage + 1 }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <button @click="showName">点我提示学生名</button>
    <button @click="update">年龄++</button>
  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "student",
  data() {
    return {
      msg: "做对比",
      // 实例化一个数据对象，接收传入我参数
      myage: this.age
    };
  },
  methods: {
    showName() {
      console.log(this);
      alert(this.name);
    },
    update() {
      this.myage++;
    },
  },
  // 接收传入参数，放入vc中.
  // props: ["name", "age", "gender"],

  // 数据类型限制的接收
  // props:{
  //   name:String,
  //   age:Number,
  //   gender:String
  // }

  // 对每个接收到的属性名称，作更详细的设置.
  // 表单的感觉了，完全可以混搭
  props: {
    name: {
      type: String,
      // 不能为空，先关闭
      // required: true,
      default: "张三",
    },
    age: { type: Number, default: 10 },
    gender: String,
  },
};
</script>

<style>
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
</style>
