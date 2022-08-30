<template>
  <div class="hello">
    <h1>当前值为{{ sum }}</h1>
    <h1>当前值放大10倍{{ $store.getters.bigSum }}</h1>
    <h1>当前值放大10倍{{ bigSum }}</h1>
    <h2>{{ school }}</h2>
    <h2>{{ $store.state.msg }}</h2>

    <input type="number" v-model="n" />
    <button @click="increment(n)">点我调用</button>

    <h3>下方组件的总人数是{{userList.length}}</h3>
  </div>
</template>

<script>
// 导入映射，将$store.state中的key和funcname进行方法映射
import { mapState,mapGetters,mapMutations,mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    // 自写计算属性
    // sum() {
    //   return this.$store.state.sum;
    // },

    // 程序生成计算属性（对象写法）
    ...mapState({sum:"sum"}),

    // 数组写法
    ...mapState(["school", "userList"]),

    // 从getters获取数据，取方法
    ...mapGetters(["bigSum"])

  },
  methods: {
    // increment() {
      // 给store的app函数传入this,n
      // console.log(this.n);
      // this.$store.dispatch("add", this.n);
      // 如果没什么逻辑，可以直接找commit
      // this.$store.commit("add", this.n);
    // },



    // 将事件回调也用mapMutations方法进行处理,但是事件必须传参，不然传递的value是click-event点击事件
    // ...mapMutations({increment: "add"})
    // 数组写法，事件回调名和vuex中的回调名完全一致，就可以用数组
    // ...mapMutations(["add"])

    // 这个就是传递给actions了
    ...mapActions({increment: "add"})
  },
  mounted() {
    const x = mapState({ big10: "bigSum" });
    console.log(x);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
