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
const router = new VueRouter({
  /*
  路由组件的切换，在销毁和生成的之间切换
  */
  routes: [
    {
      // 起名
      name: "dagai",
      // 一级路由
      path: "/about",
      component: About,
      // 设置是否校验标记符
      meta: { isAuth: false },
    },
    {
      name: "home",
      path: "/home",
      component: Home,
      children: [
        {
          name: "news",
          // 子路由不用加斜杠，可以继续套娃
          path: "news",
          component: News,
          // 元数据，可以放各种值
          meta: { isAuth: false },
          // 这里可以再设置一个独享前置路由守卫，但是没有后置了
          beforeEnter(to, from, next) {
            console.log("我是独享前置路由守卫");
            next();
          },
        },

        {
          // 子路由不用加斜杠
          name: "messages",
          path: "messages",
          component: Messages,
          meta: { isAuth: true },
          children: [
            {
              // 别名，可以直接用它代替跳转to，
              name: "xiangqing",
              // 接收params参数，路径参数
              path: "detail/:id/:title",
              component: Detail,
              // props第一种写法，传递给detail组件
              // props:{a:1, b:'hello'}

              // 第二种写法，直接bool值，开启数据传递detail组件，只能接收params参数，get传参不行
              // props:true,

              // 第三种写法，
              // props($route){
              //   return {id: $route.id, title:$route.title}
              // }

              // 两重结构赋值
              props({ query: { id, title } }) {
                return { id, title };
              },
            },
          ],
        },
      ],
    },
  ],
});

// 全局前置路由守护，切换url之前调用，初始化也会被调用
router.beforeEach((to, from, next) => {
  console.log("前置路由守护", to, from);

  // 笨蛋判断
  //   if (["news", "messages"].findIndex((elemet) => elemet == to.name) !== -1) {
  //     if (localStorage.getItem("school")) {
  //       // 查询cookie or session
  //       next();
  //     } else {
  //       alert("尚未登录，无权限查看");
  //     }
  //   } else {
  //     next();
  //   }
  // });

  // 前置常用的标记符判断
  if (to.meta.isAuth) {
    if (localStorage.getItem("school")) {
      // 查询cookie or session
      next();
    } else {
      alert("尚未登录，无权限查看");
    }
  } else {
    next();
  }
});

// 后置路由守卫
router.afterEach((to, form) => {
  // 常拿来修改标签页的题目
  console.log("后置路由守卫", to, form);
  if (to.name !== null) document.title = to.name;
});

// 独享路由守卫

export default router;
