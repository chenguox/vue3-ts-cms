import { createApp } from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router'
import { setupStore } from './store'

// import { ElButton } from 'element-plus'
// import 'ant-design-vue/dist/antd.css'

const app = createApp(App) // 创建vue实例
// app.component(ElButton.name, ElButton)

// Configure store(pinia)
setupStore(app)

// Configure routing
app.use(router)
// app.use(store) // 挂载
app.mount('#app') // 挂载实例
