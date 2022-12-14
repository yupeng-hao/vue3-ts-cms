import { createApp } from 'vue'
import App from './App.vue'
import myRequest from './service'
import 'element-plus/dist/index.css'
import 'normalize.css'
import './assets/css/index.less'
// 引入字体图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { setupStore } from './store'

// import { globalRegister } from './global'

import store from './store'

import router from './router'

import './service/axios'
const app = createApp(App)
// 将字体图标进行全局注册
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

// app.use(globalRegister)
app.use(store)
app.use(router)
setupStore()
app.mount('#app')
