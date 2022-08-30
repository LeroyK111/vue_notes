<template>
  <div class="hello">
    <h1>当前值为{{ sum }}</h1>
    <h1>当前值放大10倍{{ bigSum }}</h1>
    <h1>当前值放大10倍{{ bigSumDot}}</h1>
    <h2>{{ school }}</h2>
    <h2>{{ msg }}</h2>

    <input type="number" v-model="n" />
    <button @click="increment(n)">点我调用</button>

    <h3>下方组件的总人数是{{ userList.length }}</h3>
  </div>
</template>

<script>
// 导入映射，将$store.state中的key和funcname进行方法映射
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {
      n: 0,
    };
  },
  computed: {
    // 数组写法
    ...mapState("constAll", ["school", "msg", "sum"]),
    ...mapState("userAll", ["userList"]),
    // 从getters中获取数据
    ...mapGetters("constAll", ["bigSum"]),
    // 如果使用点语法获取get
    bigSumDot() {
      return this.$store.getters["constAll/bigSum"];
    },
  },
  mounted() {
    // 这里就验证了点语法，不好使
    // console.log(this.$store);
  },
  methods: {
    // 这个就是传递给actions了
    ...mapActions("constAll", { increment: "add" }),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
