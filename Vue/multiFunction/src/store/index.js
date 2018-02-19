import Vue from 'vue'
import Vuex from 'vuex'

// import app from './modules/app.js'
// import getters from './getters.js'
import api from './modules/dsapi'
import system from './modules/system'
Vue.use(Vuex)

const store = new Vuex.Store({
        modules:{
            api: api,
            system: system
        },
        state: {

        },
        mutation: {

        },
        actions: {

        }
})

export default store
