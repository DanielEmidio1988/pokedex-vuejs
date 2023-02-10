import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)



import HomePage from "@/pages/HomePage.vue"

const routes = [
    {
        path:'/',
        component:HomePage,
    }
];

const router = new VueRouter({
    routes,
    mode: 'history'
});

export default router;