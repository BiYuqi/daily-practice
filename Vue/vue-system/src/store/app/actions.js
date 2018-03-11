import * as types from './mutation-types'
export const getVersionAction = ({dispatch, state, commit, getters, rootGetters}, data) => {
  commit(types.VERSION, state.version += 1)
}
/*
* 测试ajax调用
*/
export const testAjaxAction = ({state, commit, dispatch, getters, rootGetters}, data) => {
  const payload = rootGetters['api/payload']
  payload.param = data
  return new Promise((resolve, reject) => {
    payload.callback = res => {
      commit(types.TEST_AJAX, res)
      resolve(res)
    }
    dispatch('api/testAjax', payload, {root: true})
  })
}
