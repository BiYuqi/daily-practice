export const sysLogin = ({state, dispatch},payload) => {
  dispatch('api/ajaxMethod', {param: ['post', payload]}, {root: true})
}

export const ajaxMethod = ({state, dispatch}, data) => {
  let payload = data.param[1]
  payload.callback({name:"毕宇旗",age:"25"})
}
