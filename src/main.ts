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

interface DataType {
  data: any
  returnCode: string
  success: boolean
}

// myRequest
//   .request<DataType>({
//     url: '/home/multidata',
//     method: 'GET',
//     showLoading: false
//   })
//   .then((res) => {
//     console.log(res.data)
//     console.log(res.returnCode)
//     console.log(res.success)
//   })

myRequest
  .get<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res)
  })
