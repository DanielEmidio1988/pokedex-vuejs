import { createApp } from 'vue' 
import {createRouter, createWebHistory} from 'vue-router'  
import App from '@/App.vue'
import HomePage from "@/pages/HomePage.vue"
import AboutPage from "@/pages/AboutPage.vue"
import ContactPage from "@/pages/ContactPage.vue"


const routes = [
    {
      path: '/',
      name: 'Home',
      component: HomePage,//shsould be imported 
     
    },{
      path: '/sobre',
      name: 'About',
      component: AboutPage,//shsould be imported 
     
    },{
      path: '/contato',
      name: 'Contact',
      component: ContactPage,//shsould be imported 
     
    },
  ]
  
  const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
  })
  createApp(App).use(router).mount('#app')

export default router