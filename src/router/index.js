import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '@/pages/Home'



const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{show:true}
  },
  {
    path: '*',
    redirect:'/'

  }

]

const router = new VueRouter({
  routes
})

export default router
