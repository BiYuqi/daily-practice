import * as types from './mutation-types'

export default {
  [types.USER_LOGIN](state, res) {
    state.result = res
  }
}
