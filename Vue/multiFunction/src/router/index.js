import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/home'
import HuiLv from '@/views/huilv/huilv'
import Relative from '@/views/relativeCall/relativeCall'
Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/huilv',
            name: 'huilv',
            component: HuiLv
        },
        {
            path: '/relative',
            name: 'relative',
            component: Relative
        }
    ]
})
