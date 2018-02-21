import Main from '@/views/Main'
export default {
  path: '/bar',
  name: 'bar',
  component: Main,
  children: [
    {
      path: 'bar_index',
      meta: {
        title: '天河测试'
      },
      name: 'bar_index',
      component: () => import('@/views/article/bar.vue')
    }
  ]
}
