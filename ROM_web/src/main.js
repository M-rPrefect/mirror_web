import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'
import 'element-plus/theme-chalk/index.css'
import './assets/main.css'

createApp(App).use(Antd).use(ElementPlus).mount('#app')
