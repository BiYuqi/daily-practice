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
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
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
    /**
    * 这里因为是用的mock.js 所以明确区分了
    * getUserInfoAction  因为一次只能返回一种接口所以模拟了两个，一个admin 一个user
    * getUserInfoNormalAction 连个接口后续应该只需要一个即可
    */
    if ((Cookie.get('user')) && store.getters['app/role'].length === 0) { // 已经登录且角色已经分配
      if (Cookie.get('role') === 'admin') {
        store.dispatch('app/getUserInfoAction').then((role) => { // 服务端拉去用户role
          store.commit('app/USER_INFO', role) // vuex管理role
          store.dispatch('permiss/setFilterRoutes', role.data.data[0]).then((res) => { // 根据role过滤路由
            store.dispatch('permiss/setRoutes', res) // vuex管理路由
            router.addRoutes(res) // 动态的添加路由
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
  NProgress.done()
  window.scrollTo(0, 0)
})
