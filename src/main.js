import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

// 引入axios
import axios from "axios";
// 全局使用axios，在代码中，只需要“this.$axios”即可
axios.defaults.headers.post["Content-Type"] = "application/json";

// 引入Element-Plus的CSS
import "element-plus/dist/index.css"
// 引入图标库
import * as ElementPlusIconsVue from "@element-plus/icons-vue"

// 引入nprogress，页面加载进度条——npm install --save nprogress
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease",         // 动画方式
  speed: 500,             // 递增进度条的速度
  showSpinner: false,     // 是否显示加载ico
  trickleSpeed: 200,      // 自动递增间隔
  minimum: 0.3,           // 初始化时的最小百分比
});
router.beforeEach((to, from, next) => {
  // 每次切换页面时，调用进度条
  NProgress.start();
  // 这个一定要加，没有next()页面不会跳转的
  next();
});
router.afterEach(() => {
  // 在即将进入新的页面组件前，关闭掉进度条
  NProgress.done();
});


const app = createApp(App)
// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)

app.mount('#app')
