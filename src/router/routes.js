const routes = [
  {path: '/', component: () => import('pages/Homepage.vue')},
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '/home', component: () => import('pages/Home.vue')},
      {path: '/dashboard-grid', component: () => import('pages/DashboardGrid.vue')},
      {path: '/dashboard-list', component: () => import('pages/DashboardList.vue')}
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
