import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Util from '@/utils/baseSetting'
import routes from './baseConfig'
// import {baseRoute} from './sidebar'
import NProgress from 'nprogress'
import store from '@/store'
Vue.use(Router)
export const router = new Router({
  // mode: 'history',
  routes: routes
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  const title = to.meta.title
  Util.title(title)
  if (!Cookie.get('user') && to.name !== 'login') {
    next({
      replace: true,
      name: 'login'
    })
  } else if (Cookie.get('user') && to.name === 'login') {
    next({
      name: 'home_index'
    })
  } else {
    if ((Cookie.get('user')) && store.getters['app/role'].length === 0) {
      console.log('执行')
      if (Cookie.get('role') === 'admin') {
        store.dispatch('app/getUserInfoAction').then((role) => {
          store.commit('app/USER_INFO', role)
          store.dispatch('permiss/setFilterRoutes', role.data.data[0]).then((res) => {
            store.dispatch('permiss/setRoutes', res)
            router.addRoutes(res)
            next()
          })
        })
      } else { // user
        store.dispatch('app/getUserInfoNormalAction').then((role) => {
          store.commit('app/USER_INFO', role)
          store.dispatch('permiss/setFilterRoutes', role.data.data[0]).then((res) => {
            store.dispatch('permiss/setRoutes', res)
            router.addRoutes(res)
            next()
          })
        })
      }
    }
    next()
  }
})

router.afterEach((to) => {
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.done()
  window.scrollTo(0, 0)
})
