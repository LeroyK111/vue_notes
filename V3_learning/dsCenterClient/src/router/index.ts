import { createRouter, createWebHistory } from 'vue-router'
import App from '@/App.vue'
import LoginRegister from '@/layout/LoginRegister.vue'

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
          name: 'default',
          component: LoginRegister,
        }
      ]
    }
  ],
})

export default router
