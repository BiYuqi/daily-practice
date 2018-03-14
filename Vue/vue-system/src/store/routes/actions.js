import { filterRoutesByRole } from '@/utils/permission'
import { baseRoute } from '@/router/sidebar'
import * as types from './mutation-types'
export const setFilterRoutes = ({state, commit, dispatch, getters, rootGetters}, data) => {
  return new Promise((resolve, reject) => {
    const role = data
    const result = filterRoutesByRole(baseRoute, role)
    commit(types.SET_FILTER_ROUTES, result)
    resolve(result)
  })
}
