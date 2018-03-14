import * as types from './mutation-types'
export default {
  [types.VERSION] (state, res) {
    state.version = res
  },
  [types.TEST_AJAX] (state, res) {
    state.testAjax = res.data.data
  },
  [types.USER_INFO] (state, res) {
    state.role = res.data.data
  },
  resetRole (state) {
    state.role.length = 0
  }
}
