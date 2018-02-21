import Main from '@/views/Main'
export default {
  path: '/',
  name: 'main_index',
  component: Main,
  redirect: '/alarm',
  children: [
    {
      path: 'alarm',
      meta: {
        title: '案由代码维护'
      },
      name: 'alarm_index',
      component: () => import('@/views/article/alarm.vue')
    },
    {
      path: 'foo/:user_id',
      meta: {
        title: '动态路由测试'
      },
      name: 'foo_index',
      component: () => import('@/views/article/foo.vue')
    }
  ]
}
