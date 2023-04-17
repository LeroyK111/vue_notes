<template>
  <!-- 我们写个组件html -->
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2 @click="showName">学生名称: {{ name }}</h2>
    <h2>学生年龄: {{ myage }}</h2>
    <h2>学生性别: {{ gender }}</h2>
    <!-- 绑定一个自定义事件，实现子给父传递数据 -->
     <button @click="sendStudentApp">把人名给APP</button>
     <button @click="unbind">解除绑定事件</button>
     <!-- 销毁student的事件 -->
     <button @click="death">销毁student组件实例</button>

  </div>
</template>

<script>
// 组件交互代码，代码还要暴露
// 使用默认暴露
export default {
  name: "student",
  data() {
    return {
      msg: "混入，两个组件共享一个生命环节",
      name: "李四",
      myage: 18,
      gender: "男",
    };
  },
  methods: {
    showName() {
      alert(this.name)
    },
    sendStudentApp(){
      // 手动触发student组件实例的atguigu事件，还能传参
      this.$emit('atguigu', this.name, 1,"23",424);
      // 再触发第二事件
      this.$emit("diyEvnet");
      // 触发第三事件，不过是原生事件
      // this.$emit("click")
    },
    unbind(){
      // 只适合解绑一个事件
      // this.$off('atguigu');

      // 解多个
      this.$off(['atguigu', "diyEvnet"]);

      // 清空所有绑定
      // this.$off();
    },
    death(){
      // 销毁组件实例，自定义事件失效，但是原生js事件还有用
      this.$destroy();
    }
  },
};
</script>

<style scoped>
/* 加入scoped就可以将样式锁定组件中,彻底避免冲突 */
/* 组件的样式 */
.demo {
  width: 200px;
  height: 300px;
  background-color: skyblue;
}
</style>
