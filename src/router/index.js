import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Journal from '../views/Journal.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Journal',
    name: 'Journal',
    component: Journal
  },
  {
    path: '/Login',
    name: 'Login',
    components: Login
  }
]

const router = new VueRouter({
  routes
})

export default router
