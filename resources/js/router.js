import { createRouter, createWebHistory } from 'vue-router'
import Window1 from './pages/Window1.vue'
import Window2 from './pages/Window2.vue'
import Window3 from './pages/Window3.vue'
import Home from './pages/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/window/:id',
    name: 'Window',
    component: () => import('./pages/WindowDetail.vue'),
    props: true
  },
  {
    path: '/window1',
    name: 'Window1',
    component: Window1
  },
  {
    path: '/window2',
    name: 'Window2',
    component: Window2
  },
  {
    path: '/window3',
    name: 'Window3',
    component: Window3
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
