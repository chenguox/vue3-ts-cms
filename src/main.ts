import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import { setupStore } from './store'

import 'normalize.css'
import './assets/css/index.less'

// 如果您正在使用CDN引入，请删除下面一行。
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App) // 创建vue实例

app.use(pinia)
app.use(router)

// 初始化用户数据
setupStore()

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app') // 挂载实例
