import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const state = {
  result:{},
  payload: {
    param: {},
    status: 200,
    callback: function () {},
    error (res) {
      // console.log(this)
      return res
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
