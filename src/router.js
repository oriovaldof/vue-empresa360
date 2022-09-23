import { createRouter, createWebHistory } from 'vue-router';
//createWebHashHistory
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Site from '@/views/Site.vue';

const routes = [
    {
        path:'/',
        component: Site
    },
    {
        path:'/home',
        component: Home
    },
    {
        path:'/login',
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
