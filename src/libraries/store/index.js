import Vue from 'vue'
import Vuex from 'vuex'
import * as modules from './modules'
import storage from '../utils/storage'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    token: storage.get('token') || ''
  },
  modules: modules,
  mutations: {
    CREATE_TOKEN (state, token) {
      state.token = token
      storage.set('token', token)
    },
    CLEAR_TOKEN (state) {
      state.token = ''
      storage.set('token', '')
    }
  },
  getters: {
    token: state => state.token
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
