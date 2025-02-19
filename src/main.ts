import {createApp} from 'vue'
import App from './App.vue'
import './assets/styles/index.css'
import './demos/ipc'
import router from './router/index'
import pinia from '@/store/index'

const app = createApp(App)

app.use(router)
app.use(pinia)

app.mount('#app')
