import Vue from 'vue'
import Router from 'vue-router'
import Cookie from 'js-cookie'
import Util from '@/utils/baseSetting'
import routes from './baseConfig'
import {baseRoute} from './sidebar'
import NProgress from 'nprogress'
Vue.use(Router)
export const router = new Router({
  // mode: 'history',
  routes: routes.concat(baseRoute)
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
    NProgress.done()
  } else if (Cookie.get('user') && to.name === 'login') {
    next({
      name: 'dashboard_index'
    })
    NProgress.done()
  } else {
    next()
    NProgress.done()
  }
})

router.afterEach((to) => {
  Util.opendPage(router.app, to.name, to.params, to.query, to.meta, to.path)
  window.scrollTo(0, 0)
})
