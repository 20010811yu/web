import { createRouter, createWebHistory } from 'vue-router'
import { applyRouteSeo } from '../seo'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/products', name: 'Products', component: () => import('../views/Products.vue') },
  { path: '/about', name: 'About', component: () => import('../views/About.vue') },
  { path: '/news', name: 'News', component: () => import('../views/News.vue') },
  { path: '/news/:id', name: 'NewsDetail', component: () => import('../views/NewsDetail.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/Contact.vue') },
  { path: '/careers', name: 'Careers', component: () => import('../views/Careers.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0 }
  },
})

export default router

router.afterEach((to) => applyRouteSeo(to))
