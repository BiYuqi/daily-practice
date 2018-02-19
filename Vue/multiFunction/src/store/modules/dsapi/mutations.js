import * as types from './mutation-types'

export default {
  [types.SYS_LOGININFO](state, res) {
    state.result = res
  }
}
