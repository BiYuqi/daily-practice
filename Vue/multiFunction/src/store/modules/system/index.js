import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const state = {
  result:''
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
