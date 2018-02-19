import * as types from './mutation-types'

export const sysLogin = ({dispatch, commit, getters, rootGetters}, data) => {
  var payload = rootGetters['api/payload']

  payload.callback = function (res) {
    data.callback(res)
    console.log(data)
    commit(types.USER_LOGIN, res)
  }
  dispatch('api/sysLogin', payload, { root: true }) // 调用api的http请求
}
