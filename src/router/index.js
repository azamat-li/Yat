import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'
import GlobalTime from '../views/GlobalTime.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'board',
    component: Board
  },
  {
    path: '/распределение-времени-между-классами',
    name: 'time-between-classes',
    component: GlobalTime
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
