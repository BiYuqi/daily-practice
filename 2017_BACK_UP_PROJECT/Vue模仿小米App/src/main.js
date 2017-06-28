// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import vuescroll from 'vue-scroll'

import App from './App'
import router from './router'
import store from './store'
import Ajax from './axios'


Vue.use(vuescroll)
Vue.use(Ajax)

Vue.config.productionTip = false

router.beforeEach((to,from,next) =>{
    if(to.meta.requireAuth){
        //这里只判断了id 实际上线应该判断token
        if(store.state.user.id){
            next()
        }else{
            next({
                path:'/login',
                query:{redirect:to.fullPath}
            })
        }
    }else{
        next();
    }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
