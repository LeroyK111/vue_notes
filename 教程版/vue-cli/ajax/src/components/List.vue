<template>
  <ul id="ul" class="ul">
    <li v-show="info.users.length" v-for="user in info.users" :key="user.login">
      <a :href="user.html_url"> <img :src="user.avatar_url" alt="" /></a>
      <span>{{ user.login }}</span>
    </li>
    <!-- 特殊情况下显示，初次使用 -->
    <li v-show="info.ifFirst" class="noli"><h1>欢迎使用github用户检索!</h1></li>
    <li v-show="info.isLoading" class="noli">
      <img src="../assets/loading.gif" alt="" />
    </li>
    <li v-show="info.errMsg" class="noli">{{ info.errMsg }}</li>
  </ul>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        users: [],
        ifFirst: true,
        isLoading: false,
        errMsg: "",
      },
    };
  },
  mounted() {
    this.$bus.$on("getUsers", (dataObj) => {
     this.info = {...this.info, ...dataObj}
    });
  },
};
</script>

<style>
.ul {
  display: flex;
  flex-flow: row wrap;
  border-top: 1px solid #ccc;
}

.ul li {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  width: 30vw;
  height: 30vw;
  border: 1px solid #ccc;
}
.noli {
  border: none !important;
}

.ul li img {
  width: 20vw;
  height: 20vw;
}

.ul li span {
  width: 20vw;
  height: 5vw;
  display: block;
  text-align: center;
  line-height: 5vw;
}
</style>
