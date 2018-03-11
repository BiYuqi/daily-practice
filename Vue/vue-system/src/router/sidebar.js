import Main from '@/views/Main'
export const baseRoute = [
  {
    path: '/dashboard',
    component: Main,
    title: '首页',
    icon: 'dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'dashboard_index',
        meta: {
          title: '首页'
        },
        component: () => import('@/views/dashboard/dashboard.vue')
      }
    ]
  },
  {
    path: '/compoents',
    name: 'compoents',
    component: Main,
    title: '组件库',
    icon: 'component',
    children: [
      {
        path: 'markdown',
        name: 'markdown',
        meta: {
          title: 'Markdown'
        },
        component: () => import('@/views/components-demo/markdown.vue')
      },
      {
        path: 'json-editor',
        name: 'json_editor',
        meta: {
          title: 'JSON编辑器'
        },
        component: () => import('@/views/components-demo/jsonEditor.vue')
      },
      {
        path: 'back-to-top',
        name: 'back_to_top',
        meta: {
          title: 'BackTop'
        },
        component: () => import('@/views/components-demo/backToTop.vue')
      }
    ]
  },
  {
    path: '/icon',
    title: '图标',
    name: 'icon',
    icon: 'icon',
    component: Main,
    children: [
      {
        path: 'icon',
        name: 'icon_index',
        meta: {
          title: '图标'
        },
        component: () => import('@/views/components-demo/icon.vue')
      }
    ]
  },
  {
    path: '/form',
    title: '表单',
    name: 'form',
    icon: 'form',
    component: Main,
    children: [
      {
        path: 'form-creat',
        name: 'form_creat',
        meta: {
          title: '表单创建'
        },
        component: () => import('@/views/components-demo/createForm.vue')
      },
      {
        path: 'form-editor',
        name: 'form_editor',
        meta: {
          title: '编辑表单'
        },
        component: () => import('@/views/components-demo/editForm.vue')
      }
    ]
  },
  {
    path: '/setting',
    title: '配置',
    name: 'set',
    icon: 'qq',
    component: Main,
    children: [
      {
        path: 'setting',
        name: 'setting_index',
        meta: {
          title: '配置'
        },
        component: () => import('@/views/components-demo/setting.vue')
      }
    ]
  }
]
