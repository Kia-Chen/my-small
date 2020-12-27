import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import Index from '@/components/Index'
import Login from '@/pages/Login'
import Reg from '@/pages/register'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Goods from '@/components/Goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Reg
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    }
  ]
})
