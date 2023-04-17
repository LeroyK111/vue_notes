/*
专门创建整个APP的路由器，专门
*/

import VueRouter from "vue-router";
import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import News from "../pages/News.vue";
import Messages from "../pages/Messages.vue";
import Detail from "../pages/Detail.vue";


// 创建路由器
export default new VueRouter({
  /*
  路由组件的切换，在销毁和生成的之间切换
  */
  routes: [
    {
      // 起名
      name:"dagai",
      // 一级路由
      path: "/about",
      component: About,
    },
    {
      path: "/home",
      component: Home,
      children:[
        {
          // 子路由不用加斜杠，可以继续套娃
          path:"news",
          component: News
        },

        {
          // 子路由不用加斜杠
          path:"messages",
          component: Messages,
          children:[{
            // 别名，可以直接用它代替跳转to，
            name:"xiangqing",
            path:"detail",
            component:Detail
          }]
        },
      ]
    },
  ],
});
