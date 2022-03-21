import { createRouter, createWebHistory } from 'vue-router'
import LandingRouter from './routes/landing'
import DashboardRouter from './routes/dashboard'
import LoginView from '../views/auth/LoginView'
import RegisterView from '../views/auth/RegisterView'

const routes = [
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/register',
    component: RegisterView,
  },
  LandingRouter,
  DashboardRouter,
  
]

const router = createRouter({
  linkActiveClass: "active-router-element",
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
