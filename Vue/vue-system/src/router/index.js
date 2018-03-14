import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Util from '@/utils/baseSetting'
import routes from './baseConfig'
import {baseRoute} from './sidebar'
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
  if (!Cookie.get('once')) {
    store.dispatch('permiss/setFilterRoutes', localStorage.getItem('role')).then((res) => {
      router.addRoutes(res)
      Cookie.set('once', '1')
    })
  }
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
    next()
  }
})

router.afterEach((to) => {
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  NProgress.done()
  window.scrollTo(0, 0)
})
