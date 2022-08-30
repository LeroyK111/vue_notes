<template>
  <div id="search" class="search">
    <h2>{{ title }}</h2>
    <div>
      <input
        type="text"
        placeholder="关键字"
        v-model="keyWord"
        @keyup.enter="searchUsers"
      />
      <button @click="searchUsers">搜索</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
let textUrl = "https://api.github.com/search/users?q=xxx";
export default {
  name: "Search",
  data() {
    return {
      title: "检索你要找的用户",
      keyWord: "",
    };
  },
  methods: {
    searchUsers() {
      this.$bus.$emit("getUsers", {
        users: [],
        ifFirst: false,
        isLoading: true,
        errMsg: "",
      });
      if (this.keyWord.trim() === "") return alert("输入框不能为空");
      // 对url进行替换拼接
      let newtextUrl = textUrl.replace("xxx", this.keyWord);
      axios.get(newtextUrl).then(
        (res) => {
          // console.log('请求成功', res.data);
          this.$bus.$emit("getUsers", {
            users: res.data.items,
            isLoading: false,
            errMsg: "",
          });
        },
        (error) => {
          this.$bus.$emit("getUsers", {
            users: [],
            isLoading: false,
            errMsg: error.message,
          });
        }
      );
    },
  },
};
</script>

<style>
.search {
  height: 10vw;
  background-color: #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.search div input {
  width: 15vw;
  height: 3vw;
}

.search div button {
  width: 5vw;
  height: 3vw;
}
</style>
