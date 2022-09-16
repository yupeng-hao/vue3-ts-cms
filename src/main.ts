import { createApp } from 'vue'
import App from './App.vue'
import myRequest from './service'
import 'element-plus/dist/index.css'

// import { globalRegister } from './global'

import store from './store'

import router from './router'

import './service/axios'
const app = createApp(App)

// app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')

myRequest.request({
  url: '/home/multidata',
  method: 'GET',
  showLoading: false
})
