import { createRouter, createWebHashHistory } from 'vue-router'
import { RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/main/main.vue')
  }
]

// 创建 router 对象
const router = createRouter({
  routes,
  history: createWebHashHistory()
})

// 路由前置守卫
router.beforeEach((to)=>{
  if(to.path !== '/login'){
    const token = localCache.getCache('token')
    if(!token){
      return '/login'
    }
  }
})

export default router
