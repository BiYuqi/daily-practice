export default {
  path: '',
  name: 'home_index',
  title: '报警系统',
  meta: {
    title: '报警系统',
    isLocal: true // 是否被注入opendList
  },
  component: () => import('@/views/home/home.vue')
}
