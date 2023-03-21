import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)


const originalpush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalpush.call(this,location).catch(err=>err)
}

const routes = [
  { path: '/', redirect: '/login' },
  {
    path: '/',
    name: 'index',
    component: () => import('../views/index.vue'),
    children:[
      {
        path: 'home',
        name: 'home',
        component: HomeView
      },
      {
        path: 'login',
        name: 'login',
        component: () => import(/* webpackChunkName: "test" */'../views/login.vue')
      },
      {
        path: 'animation',
        name: 'animation',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Animation.vue')
      },
      {
        path: 'test',
        name: 'test',
        component: () => import(/* webpackChunkName: "test" */'../views/Test.vue')
      },
      {
        path: 'alibaixiu',
        name: 'alibaixiu',
        component: () => import('../views/Alibaixiu.vue')
      },
      {
        path: 'trainee',
        name: 'trainee',
        component: () => import('../views/Trainee.vue')
      },
    ]
  }

  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
