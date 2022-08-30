<template>
  <div>
    <hr />
    <h2>上方组件的求和{{sum}}</h2>
    <h1>人员列表</h1>
    <input type="text" placeholder="请输入名字" v-model="name" />
    <button @click="addUser(newUser)">添加</button>
    <ul>
      <li v-for="item in userList" :key="item.id" v-text="item.name"></li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { nanoid } from "nanoid";
export default {
  name: "textWorld",
  data() {
    return {
      name: "",
    };
  },
  computed: {
    ...mapState(["userList", "sum"]),
    
    newUser() {
      return {id:nanoid(), name:this.name}
    },
  },
  methods: {
    // 记得传参
    ...mapMutations(["addUser"]),
  },
};
</script>

<style></style>
