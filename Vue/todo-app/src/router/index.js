import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import LayerModel from '@/components/FloorEffect/LayerModel'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Hello',
        component: HelloWorld
    },
    {
        path: '/layer',
        name: 'layer',
        component: LayerModel
    }
  ]
})
