import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { setupStore } from './store'
import '@/mock'

import 'normalize.css'
import './assets/css/index.less'

const app = createApp(App) // 创建vue实例

// Configure store(pinia)
setupStore(app)

// Configure routing
app.use(router)

app.mount('#app') // 挂载实例
