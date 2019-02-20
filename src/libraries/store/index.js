import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import storage from '../utils/storage'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    token: storage.get('token') || '',
    menus: storage.get('menus') ? JSON.parse(storage.get('menus')) : undefined,
    user: storage.get('user') ? JSON.parse(storage.get('user')) : undefined
  },
  modules: modules,
  mutations: {
    CREATE_TOKEN (state, token) {
      state.token = token
      storage.set('token', token)
    },
    CLEAR_TOKEN (state) {
      state.token = ''
      state.menus = []
      state.user = undefined
      storage.set('token', '')
    }
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    menus: state => state.menus
  },
  actions: {
    checkToken: (store) => {
      let getters = store.getters
      return new Promise((resolve, reject) => {
        if (!getters.token) {
          return resolve(false)
        } else {
          return resolve(true)
        }
      })
    }
  }
})
