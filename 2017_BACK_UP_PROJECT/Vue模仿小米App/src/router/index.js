import Vue from 'vue'
import Router from 'vue-router'

//UI组件
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/js/rem.js'


Vue.use(Mint);
Vue.use(Router)

//轮播组件 后期可单独使用 以免体积过大 不全部引入mint
// import { Swipe, SwipeItem } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);

//Footer组件
import Home from '@/components/tabbar/home'
import Classify from '@/components/tabbar/classify'
import Discover from '@/components/tabbar/discover'
import Shop from '@/components/tabbar/shop'
import Mine from '@/components/tabbar/mine'
import Search from '@/components/search/index'
import Channel from '@/components/channel'
import Login from '@/components/login'
import Message from '@/components/message'

export default new Router({
  routes: [
    { path: '/', redirect:'/home' },
    { path: '/home', component: Home },
    { path: '/classify', component: Classify },
    {
        path: '/discover',
        meta: {
            requireAuth:true,
        },
        component: Discover
    },
    { path: '/shop', component: Shop },
    { path: '/mine', component: Mine },
    { path: '/search/index', component: Search },
    { path: '/channel', component: Channel },
    { path:'/login',component:Login},
    { path: '/message',component:Message}

  ]
});
