import Vue from 'vue'
import VueRouter from 'vue-router'
import Board from '../views/Board.vue'
import TimeBetweenClasses from '../views/TimeBetweenClasses.vue'

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
    component: TimeBetweenClasses
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
