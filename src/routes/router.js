import { createApp } from 'vue' 
import {createRouter, createWebHistory} from 'vue-router'  
import App from '@/App.vue'
import HomePage from "@/pages/HomePage.vue"

const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomePage,//shsould be imported 
     
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  createApp(App).use(router).mount('#app')

export default router