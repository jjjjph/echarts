import { createApp } from 'vue'
import App from './pages/index.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style/index.less'
import plugin from './components'

createApp(App)
    .use(router)
    .use(ElementPlus)
    .use(plugin)
    .mount('#root')
