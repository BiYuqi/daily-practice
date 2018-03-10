export default {
  path: '/login',
  name: 'login',
  title: '登录',
  meta: {
    title: '登录'
  },
  component: () => import('@/views/login/login.vue')
}
