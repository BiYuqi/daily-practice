import Vue from 'vue'
import Vuex from 'vuex'
import SearchHeader from './search-header'
import User from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        sh:SearchHeader,
        user:User
    }
})
