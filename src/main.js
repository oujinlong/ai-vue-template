// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/libraries/store'
import Vuex from 'vuex'
import plugins from '@/libraries/plugins'
import './assets/styles/main.scss'
import './views/main/style.scss'
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(plugins)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
