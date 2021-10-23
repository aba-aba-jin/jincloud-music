import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Find from '../views/Find.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Find',
    component: Find,
    meta: { hasTabBar: true },
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   route level code-splitting
  //   this generates a separate chunk (about.[hash].js) for this route
  //   which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
