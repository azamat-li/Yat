import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Forms from '../views/Forms.vue'
import Form from '../views/Form.vue'
import Lesson from '../views/Lesson.vue'
import  Dashboard from '../views/Dashboard.vue'
import RegisterUser from '@/views/RegisterUser.vue';
import LoginUser from '@/views/LoginUser.vue';
import Home  from '@/views/Home.vue';

Vue.use(VueRouter)

const routes: RouteConfig[] = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
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
  },
  {
  path: '/register',
  name: 'register',
  component: RegisterUser
},
{
    path: '/login',
    name: 'login',
    component: LoginUser
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
