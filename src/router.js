import { createRouter, createWebHistory } from 'vue-router';
//createWebHashHistory
import Contratos from '@/components/vendas/Contratos.vue';
import Dashboard from '@/components/dashboard/Dashboard.vue';
import Home from '@/views/Home.vue';
import Leads from '@/components/vendas/Leads.vue';
import Lead from '@/components/vendas/Lead.vue';
import Login from '@/views/Login.vue';
import Servicos from '@/components/servicos/Servicos.vue';
import Site from '@/views/Site.vue';
import Vendas from '@/components/vendas/Vendas.vue';

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site
    },
    {
        path: '/home', //localhost:8080/home
        component: Home,
        children: [ //incluindo rotas filhas
            {
                path: 'vendas', //localhost:8080/home/vendas
                component: Vendas,
                children:[
                    {
                        path: 'leads', //localhost:8080/home/vendas/leads
                        component: Leads
                    },
                    {
                        path: 'leads/:id', //localhost:8080/home/vendas/leads/5
                        component: Lead
                    },
                    {
                        path: 'contratos', //localhost:8080/home/vendas/contratos
                        component: Contratos
                    }
                ]
            },
            {
                path: 'servicos', //localhost:8080/home/servicos
                component: Servicos
            },
            {
                path: 'dashboard', //localhost:8080/home/dashboard
                component: Dashboard
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
