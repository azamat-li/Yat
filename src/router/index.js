import Vue from 'vue'
import VueRouter from 'vue-router'
import Forms from '../views/Forms.vue'
import Form from '../views/Form.vue'
import Lesson from '../views/Lesson.vue'
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
        component: Form,
        children: [
          {
            path: '/lesson/:id',
            name: 'lesson',
            component: Lesson
          }
        ]
      }
    ]
  },
  {
    path: '/forms',
    name: 'forms',
    component: Forms
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
