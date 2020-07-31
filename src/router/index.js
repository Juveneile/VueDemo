import Vue from 'vue'
import VueRouter from 'vue-router'
// 路由中导入组件 将组件渲染到Vue
import { routers } from './router'
Vue.use(VueRouter)

// 路由规则
const RouterConfig = {
  mode: 'history',
  routes: routers
}

const router = new VueRouter(RouterConfig)

export default router
