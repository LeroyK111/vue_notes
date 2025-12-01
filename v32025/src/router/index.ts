import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import LoginRegister from '@/layout/RegistryLogin.vue'
import { interception } from "./globleInterception.ts"



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: App,
      redirect: '/login',
      children: [
        {
          path: 'login',
          name: 'LoginRegister',
          component: LoginRegister,
        },
        {
          path: 'home',
          name: 'HomeLayout',
          component: () => import("@/layout/HomeLayout.vue"),
          children: []
        }
      ]
    }
  ],
})

interception(router)


export default router
