import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import GlobalTime from '../views/GlobalTime.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: GlobalTime,
    children: [
      {
        path: '/form/:id',
        name: 'form',
        component: Form
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
