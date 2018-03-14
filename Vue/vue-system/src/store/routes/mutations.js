import * as types from './mutation-types'
export default {
  [types.SET_FILTER_ROUTES] (state, res) {
    state.routers = res
  }
}
