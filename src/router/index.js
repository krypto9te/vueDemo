/**
 * 路由器模块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

import About from '../views/About'
import Home from '../views/Home'
import Group from '../views/Group'
import Solo from '../views/Solo'
import MsgDetail from '../views/MsgDetail'

Vue.use(VueRouter)

export default new VueRouter({
  // n个路由
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: '/home/group', // path最左侧的/永远代表根路由
          component: Group
        },
        {
          path: 'solo', // 简化写法
          component: Solo,
          children: [
            {
              path: '/home/solo/msgdetail/:id',
              component: MsgDetail
            }
          ]
        },
        {
          path: '',
          redirect: '/home/group'
        }
      ]
    },
    {
      path: '',
      redirect: '/about'
    }
  ]
})
