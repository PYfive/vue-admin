import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/login.vue')
  },
  {
    path: '/welcome',
    name: 'Welcome',
    component: () => import('../views/welcome.vue')
  }
]

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
})

export default router
