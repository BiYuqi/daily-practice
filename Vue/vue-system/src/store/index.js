import Vue from 'vue'
import Vuex from 'vuex'
import {state} from './state'
import {mutations} from './mutations'
import api from './api'
import app from './app'
import permiss from './permiss'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    api,
    app,
    permiss
  },
  state,
  mutations
})

export default store
