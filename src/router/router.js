'use strict'

const login = {
  path: '/login',
  name: 'login',
  meta: {
    title: 'Login - 登录',
    isAnonymous: true
  },
  component: resolve => require(['@/views/login/Login.vue'], resolve)
}

const profile = {
  path: '/profile',
  name: 'profile',
  meta: {
    title: '个人信息',
    isAnonymous: true
  },
  component: resolve => require(['@/views/profile/profile.vue'], resolve)
}

const mainPage = {
  path: '/',
  name: '主页',
  component: resolve => require(['@/components/main-page/main-page.vue'], resolve),
  redirect: '/Table',
  children: [{
    path: '/Table',
    name: '表格',
    component: resolve => require(['@/views/table/Table.vue'], resolve),
    meta: {
      title: '表格'
    }
  }
  ]
}

const pageError = [
  {
    path: '/404',
    name: 'error-404',
    meta: {
      title: '404-页面不存在',
      isAnonymous: true
    },
    component: resolve => require(['@/views/error-page/404.vue'], resolve)
  },
  {
    path: '/403',
    name: 'error-403',
    component: resolve => require(['@/views/error-page/403.vue'], resolve),
    meta: {
      title: '403-权限不足',
      isAnonymous: true
    }
  }
]

// 所有上面定义的路由都要写在下面的routers里
export const routers = [
  login,
  mainPage,
  profile,
  ...pageError
]
