// 第三方工具函数
import { defineStore } from 'pinia'
// 自己的工具函数
import router from '@/router'
import localCache from '@/utils/cache'
import { mapMenusToRoutes } from '@/utils/map-menus'
// 相关请求
import { IAccount } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

const useUserStore = defineStore('user', {
  state: () => {
    return {
      token: '',
      userInfo: null,
      userMenus: null
    }
  },
  actions: {
    async accountLoginAction(payload: IAccount) {
      // 1、实现登录逻辑
      const loginResult = await accountLoginRequest(payload)
      const { id, token } = loginResult.data
      // this.token = token
      localCache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      // this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 3、请求用户菜单
      const userMenuResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenuResult.data
      // this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      // userMenus => routes
      // const routes = await mapMenusToRoutes(userMenus)

      // 将 routes 添加到 router.main.children
      // routes.forEach((route) => router.addRoute('main', route))
      await this.loadLocalLogin()

      // 4、跳转到首页
      router.push('/main')
    },
    async loadLocalLogin() {
      console.log('111111')
      const token = localCache.getCache('token')
      if (token) this.token = token

      const userInfo = localCache.getCache('userInfo')
      if (userInfo) this.userInfo = userInfo

      const userMenus = localCache.getCache('userMenus')
      if (userMenus) this.userMenus = userMenus

      // userMenus => routes
      const routes = await mapMenusToRoutes(userMenus)
      console.log('routes:', routes)

      // 将 routes 添加到 router.main.children
      routes.forEach((route) => router.addRoute('main', route))
      console.log('routes333:', router)
    }
  }
})

export default useUserStore
