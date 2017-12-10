import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import HuiLv from '@/views/huilv/huilv'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/huilv',
            name: 'huilv',
            component: HuiLv
        }
    ]
})
