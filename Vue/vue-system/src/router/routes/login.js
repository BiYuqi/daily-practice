export default {
  path: '/login',
  name: 'login',
  title: '登录',
  meta: {
    title: '登录',
    isLocal: true
  },
  component: () => import('@/views/login/login.vue')
}
