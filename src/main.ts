import { createApp } from 'vue'
import App from './App.vue'
import { globalRegister } from './global'

import store from './store'

import router from './router'
const app = createApp(App)

app.use(globalRegister)
app.use(store)
app.use(router)
app.mount('#app')
