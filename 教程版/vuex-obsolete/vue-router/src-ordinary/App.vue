<template>
  <div id="app">
    <bunner></bunner>
    <b-card title="Card Title" no-body class="check">
      <b-card-header header-tag="nav" class="text-header">
        <b-nav card-header pills vertical class="text-header-item">
          <b-nav-item>
            <!-- 使用vue原生路由标签，暂时不用响应式框架 -->
            <router-link to="/home"  class="mouseOver">Home</router-link>
          </b-nav-item>
          <b-nav-item >
            <router-link to="/about" class="mouseOver">About</router-link>
          </b-nav-item>
          <b-nav-item disabled>Disabled</b-nav-item>
        </b-nav>
      </b-card-header>
      <b-card-body class="text-center">
        <b-card-text>
          <!-- 指定路由的视图展示位置 -->
          <router-view></router-view>
        </b-card-text>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import Bunner from "./components/Bunner.vue";


export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Home,
    About,
    Bunner
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none !important;
}

#app {
  width: 600px;
  margin: 0 auto;
}

.check .text-header {
  width: 20%;
  height: 137px;
}
.card {
  display: flex;
  flex-direction: row !important;
}

.card-header {
  padding: 7px 0 !important;
}
.text-header-item {
  text-align: center;
}

.check .text-center {
  width: 80%;
  padding: 30px 0;
}
.mouseOver {
  color: red;
}
</style>
