import { createApp } from 'vue'
import App from './App.vue'

//---inicio rotas
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';

const routes = [
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
    history: createWebHashHistory(),
    routes: routes
});

//---fim rotas

const Vue = createApp(App);
Vue.use(router); //adicionando as configurações de rotas a instancia do Vue
Vue.mount('#app');
