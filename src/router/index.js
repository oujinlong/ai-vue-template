import Vue from 'vue'
import Router from 'vue-router'
// import Main from './main'

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      name: 'all-not-found',
      path: '*',
      meta: { requiresAuth: false },
      component: resolve => require.ensure([], () => resolve(require('@/views/error/error')), 'error')
    },
    {
      path: '/',
      name: '',
      meta: { requiresAuth: false },
      component: resolve => require.ensure([], () => resolve(require('@/views/main/temp/temp')), 'temp')
    }
  ]
})
