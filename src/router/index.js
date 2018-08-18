import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Swiper from '@/components/Swiper'
import Shopping from '@/components/Shopping'
import Mine from '@/components/Mine'
Vue.use(Router)

export default new Router({
  mode: "hash",
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Swiper',
      name: 'Swiper',
      component: Swiper
    },
    {
      path: '/Shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    }
  ]
})
