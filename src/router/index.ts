import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import NewsView from '@/views/NewsView.vue'
import TournamentsLiveView from '@/views/TournamentsLiveView.vue'
import CompetitorsView from '@/views/CompetitorsView.vue'
import IndexAuthView from '@/views/auth/IndexView.vue'
import { useAuthStore } from '@/stores/auth'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/tournaments-live',
    name: 'tournaments-live',
    component: TournamentsLiveView
  },
  {
    path: '/competitors',
    name: 'competitors',
    component: CompetitorsView
  },
  {
    path: '/login',
    name: 'login',
    component: AuthView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/AboutView.vue')
  },

  //User logged routes
  {
    path: '/index',
    name: 'index',
    component: IndexAuthView,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach(async (to) => {
  const publicPages = ['/login', '/register', '/home', '/news', '/tournaments-live', '/competitors']
  const authRequired = !publicPages.includes(to.path)
  const auth = useAuthStore()
  if (authRequired && !auth.user) {
    auth.returnlUrl = to.fullPath
    return '/login'
  }
})

export default router
