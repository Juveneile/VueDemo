import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './plugins/avue.js'

// 导入全局样式表
import './assets/css/global.css'

import store from './store'

Vue.config.productionTip = false

/* 项目入口 */

new Vue({
  // 将 router 挂载到 Vue 实例
  router,

  store,

  // 通过 render 函数将 App根组件渲染到 render 上
  render: h => h(App)
}).$mount('#app')
