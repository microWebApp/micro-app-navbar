import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    navBar: true
  },
  mutations: {
    [types.SHOW_NAV_BAR] (state) {
      state.navBar = true
    },
    [types.HIDE_NAV_BAR] (state) {
      state.navBar = false
    }
  },
  actions: {
  },
  modules: {
  },
  getters: {
    navBar: (state) => state.navBar
  }
})
