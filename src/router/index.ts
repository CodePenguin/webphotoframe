import { createRouter, createWebHistory } from 'vue-router'
import FullscreenPhotoView from '../views/FullscreenPhotoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FullscreenPhotoView
    }
  ]
})

export default router
