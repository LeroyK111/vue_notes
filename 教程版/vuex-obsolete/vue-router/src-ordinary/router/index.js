/*
专门创建整个APP的路由器，专门
*/



import VueRouter from "vue-router";
import About from '../pages/About.vue'
import Home from '../pages/Home.vue'



// 创建路由器
export default new VueRouter({
    /*
  路由组件的切换，在销毁和生成的之间切换
  */
  routes:[
    {
      path:"/about",
      component: About
    },
    {
      path:"/home",
      component: Home
    },
  ]
})