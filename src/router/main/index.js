
export default [
  {
    path: '',
    meta: { requiresAuth: true },
    component: resolve => require.ensure([], () => resolve(require('@/views/main/temp/temp')), 'temp')
  }
]
