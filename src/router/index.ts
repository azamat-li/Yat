import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Forms from '../views/Forms.vue'
import Form from '../views/Form.vue'
import Lesson from '../views/Lesson.vue'
import Main from '../views/Main.vue'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
  {
    path: '/',
    name: 'main',
    component: Main,
    children: [
      {
        path: '/form/:id',
        name: 'form',
        component: Form
      },
      {
        path: '/forms',
        name: 'forms',
        component: Forms
      }
    ]
  },
  {
    path: '/lesson/:id',
    name: 'lesson',
    component: Lesson,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
