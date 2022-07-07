// 第三方工具函数
import { defineStore } from 'pinia'
// 自己的工具函数
import router from '@/router'
import localCache from '@/utils/cache'
// 相关请求
import { IAccount } from '@/service/login/type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenusByRoleId
} from '@/service/login/login'

const useUserStore = defineStore('user', {
  // id: 'user', // id必填，且需要唯一
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
      this.token = token
      localCache.setCache('token', token)

      // 2、请求用户信息
      const userInfoResult = await requestUserInfoById(id)
      const userInfo = userInfoResult.data
      this.userInfo = userInfo
      localCache.setCache('userInfo', userInfo)

      // 3、请求用户菜单
      const userMenuResult = await requestUserMenusByRoleId(id)
      const userMenus = userMenuResult.data
      this.userMenus = userMenus
      localCache.setCache('userMenus', userMenus)

      // console.log(this.token, this.userInfo, this.userMenus)

      // 4、跳转到首页
      router.push('/main')
    }
  }
})

export default useUserStore
