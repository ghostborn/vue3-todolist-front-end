import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "主页"
      }
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "详情"
      }
    }
  ]
});

// 这里是全局前置路由守卫，想要显示标题，就得经过这一步
router.beforeEach((to, from, next) => {
  // 路由发生变化时修改页面title
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
})

export default router
