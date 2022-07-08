import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import useUserStore from './store/user/user'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App) // 创建vue实例

app.use(pinia)
app.use(router)

// 初始化用户数据
const userStore = useUserStore()
userStore.loadLocalLogin()


app.mount('#app') // 挂载实例
