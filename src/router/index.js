import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Mymenu from '@/components/Mymenu'
import Barbara from '@/components/Barbara'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/mymenu',
      name: 'Mymenu',
      component: Mymenu
    },
    {
      path: '/barbara',
      name: 'Barbara',
      component: Barbara
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '*',
      name: '404',
      component: Home
    }
  ]
})
