import Vue from 'vue'
import Router from 'vue-router'

import Layout from './components/Layout'
import Home from './views/Home.vue'
import Myself from './views/About'
import Search from './views/Search'
import SetInfo from './views/Setting'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        { path: '/home', component: Home, name: 'home' }
      ]
    },
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        { path: '/myself', component: Myself, name: 'myself' }
      ]
    },
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        { path: '/search', component: Search, name: 'search' }
      ]
    },
    {
      path: '/',
      name: '',
      component: Layout,
      children: [
        { path: '/setinfo', component: SetInfo, name: 'set' }
      ]
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
