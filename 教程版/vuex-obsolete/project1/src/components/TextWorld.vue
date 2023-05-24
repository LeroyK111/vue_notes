<template>
  <div>
    <hr />
    <h2>上方组件的求和{{sum}}</h2>
    <h1>人员列表</h1>
    <button @click="addPerServer">添加一个随机人名</button>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addUser(newUser)">添加</button>
    <ul>
      <li v-for="item in userList" :key="item.id" v-text="item.name"></li>
    </ul>
    <ul v-for="x in [1,2,3]" key="x">
      <li>{{ x | fi1 }}</li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "textWorld",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState("userAll", ["userList"]),
    ...mapState("constAll",["sum"]),
    newUser() {
      return {id:nanoid(), name:this.name}
    },
  },
  methods: {
    // 记得传参
    ...mapMutations("userAll", ["addUser"]),
    ...mapActions("userAll", ["addPerServer"])
  },
  filters: {
    fi1(value){
      return value
    }
  }
};
</script>

<style></style>
