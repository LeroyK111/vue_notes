<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-card title="Card Title" no-body>
      <b-card-header header-tag="nav">
        <b-nav>
          <b-nav-item>
            <!-- 多级路由url -->
            <router-link to="/home/news">News</router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/home/messages">Message</router-link>
          </b-nav-item>
        </b-nav>
      </b-card-header>

      <b-card-body class="text-center">
        <!-- include只缓存News组件，而Messages组件任由他销毁 -->
        <!-- 批量缓存 -->
        <b-card-text :include="['News']">
          <!-- 让组件视图不被销毁，需要新的标签keep-alive -->
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      msg: "我是HOME",
    };
  },

  beforeDestroy() {
    console.log("Home即将被销毁了");
  },
  beforeCreate() {
    console.log("Home被生成了");
  },
  mounted() {
    /*
    1.每个组件都有自己的$route属性，存储着自己的路由信息
    2.但是公用一个路由器
    */
    window.homeRoute = this.$route;
    window.homeRouter = this.$router;
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"></style>
