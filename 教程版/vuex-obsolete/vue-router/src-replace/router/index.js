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
            // 接收params参数，路径参数
            path:"detail/:id/:title",
            component:Detail,
            // props第一种写法，传递给detail组件
            // props:{a:1, b:'hello'}

            // 第二种写法，直接bool值，开启数据传递detail组件，只能接收params参数，get传参不行
            // props:true,

            // 第三种写法，
            // props($route){
            //   return {id: $route.id, title:$route.title}
            // }

            // 两重结构赋值
            props({query:{id, title}}){
              return {id, title}
            }
          }]
        },
      ]
    },
  ],
});
