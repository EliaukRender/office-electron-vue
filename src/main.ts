import {createApp} from 'vue'
import App from './App.vue'
import './assets/styles/index.scss'
import './demos/ipc'
import router from './router/index'

const app = createApp(App)
app.use(router)
app.mount('#app')
