import { createRouter, createWebHistory } from 'vue-router';
//createWebHashHistory
// import Contratos from '@/components/vendas/Contratos.vue';
// import Dashboard from '@/components/dashboard/Dashboard.vue';
// import DashboardRodape from '@/components/dashboard/DashboardRodape.vue';
// import Home from '@/views/Home.vue';
// import Indicadores from '@/components/servicos/Indicadores.vue';
// import Leads from '@/components/vendas/Leads.vue';
// import Lead from '@/components/vendas/Lead.vue';
// import Login from '@/views/Login.vue';
// import Opcoes from '@/components/servicos/Opcoes.vue';
// import PaginaNaoEncontrada from '@/views/PaginaNaoEncontrada.vue';
// import Servico from '@/components/servicos/Servico.vue';
// import Servicos from '@/components/servicos/Servicos.vue';
// import Site from '@/views/Site.vue';
// import Vendas from '@/components/vendas/Vendas.vue';
// import VendasPadrao from '@/components/vendas/VendasPadrao.vue';

//Lazy Loading
const Contratos = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Contratos.vue');
const Dashboard  = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/Dashboard.vue');
const DashboardRodape  = () => import(/* webpackChunkName: "dashboard" */'@/components/dashboard/DashboardRodape.vue');

const Home   = () => import('@/views/Home.vue');
const Indicadores   = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Indicadores.vue');
const Leads   = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Leads.vue');
const Lead   = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Lead.vue');
const Login   = () => import('@/views/Login.vue');
const Opcoes   = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Opcoes.vue');
const PaginaNaoEncontrada   = () => import('@/views/PaginaNaoEncontrada.vue');
const Servico   = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servico.vue');
const Servicos   = () => import(/* webpackChunkName: "servicos" */'@/components/servicos/Servicos.vue');
const Site   = () => import('@/views/Site.vue');
const Vendas   = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/Vendas.vue');
const VendasPadrao   = () => import(/* webpackChunkName: "vendas" */'@/components/vendas/VendasPadrao.vue');

const routes = [
    {
        path: '/', //localhost:8080/
        component: Site,
        meta: { //meta Fields
            requerAutorizacao: false
        }
    },
    {
        path: '/home', //localhost:8080/home
        meta: { //meta Fields
            requerAutorizacao: true
        },
        alias: '/app', //apelido usand string
        name: 'home',
        component: Home,
        children: [ //incluindo rotas filhas
            {
                path: 'vendas', //localhost:8080/home/vendas
                component: Vendas,
                children: [
                    {
                        path: 'leads', //localhost:8080/home/vendas/leads
                        component: Leads,
                        name: 'leads',
                        //Guardas de Rotas
                        /*
                            beforeEnter - executado antes de entrar na rota de destino - recebe 'to','from', 'next'
                            to = Destino;
                            from = Origim;
                            next = continua 
                        */
                        // beforeEnter: (to, from, next) => {
                        beforeEnter: () => {
                            //poderiamos verificar se o usuario tem permiss??o de carregar a rota
                            console.log('Guarda de rota beforeEnter')
                        }
                    },
                    {
                        path: 'leads/:id/:outroParametro', //localhost:8080/home/vendas/leads/5
                        props: true,
                        /*props:{ //sobrepondo parametros
                            id:4,
                            outroParametro:'pt-br'
                        },*/
                        /*
                        props: (route) => {

                            console.log('rota ativa', route);

                            let teste = route.query.idioma ? route.query.idioma : route.params.outroParametro;
                            //implementando uma l??gica para definir as props que ser??o submetidas para o componente roteado
                            return {
                                id: parseInt(route.params.id)+1,
                                outroParametro:teste
                            }
                        },
                        */
                        alias: [    //multiplos apelidos utilizando array
                            '/l/:id/:outroParametro',
                            '/pessoa/:id/:outroParametro',
                            '/:id/:outroParametro'
                        ],
                        component: Lead,
                        name: 'lead'
                    },
                    {
                        path: 'contratos', //localhost:8080/home/vendas/contratos
                        component: Contratos,
                        name: 'contratos'
                    },
                    {
                        path: '', //localhost:8080/home/vendas
                        component: VendasPadrao,
                        name: 'vendas'
                    }
                ]
            },
            {
                path: 'servicos', //localhost:8080/home/servicos
                component: Servicos,
                name: 'servicos',
                children: [
                    {
                        path: ':id', //localhost:8080/home/servicos/1
                        props: { //informa se os componentes vao poder recuperar os paramentros via props
                            default: true, //permitindo recuperar via props
                            // indicadores:false, //n??o permitinoo recuperar via propos
                            indicadores: true, // permitinoo recuperar via propos
                            opcoes: true // permitinoo recuperar via propos
                        },
                        alias: '/s/:id', //apelido usando  string
                        name: 'servico',
                        components: {
                            default: Servico,
                            opcoes: Opcoes,
                            indicadores: Indicadores,
                        },

                    }
                ]
            },
            {
                path: 'dashboard', //localhost:8080/home/dashboard
                components: {
                    default: Dashboard,
                    rodape: DashboardRodape
                }
            }
        ]
    },
    {
        path: '/login', //localhost:8080/login
        component: Login,
        meta: { //meta Fields
            requerAutorizacao: false,
            campo2: 'teste',
            campo3: 50
        }
    },
    { //redirencionaneto urls
        path: '/redirecionamento-1',
        redirect: '/home/servicos'
    },
    { //redirencionaneto urls
        path: '/redirecionamento-2',
        redirect: {
            name: 'leads'
        }
    },
    { //redirencionaneto urls
        path: '/redirecionamento-3',
        redirect: '/home/vendas'
    },
    { //redirencionaneto urls
        path: '/redirecionamento-4',
        redirect: {
            name: 'vendas'
        }
    },
    { //redirencionaneto urls com func????o
        path: '/redirecionamento-5',
        redirect: (to) => {
            //podemos programar algo antes do redirecionamento ser efetivado
            console.log(to);

            // return '/home/vendas';
            return { name: 'vendas' };
        }
    },
    { //para Rotas n??o existentes no sistema
        // path:'*' //Vue vers??o 2
        path: '/:catchAll(.*)*', //Vue versao 3
        // redirect: '/' //usando redirect
        component: PaginaNaoEncontrada //usando componete
    }
];

const router = createRouter({
    history: createWebHistory(),
    // scrollBehavior (to, from, savedPosition) {
    scrollBehavior (to, from, savedPosition) {
      /*  return {
            left: 0, //left = representa o eixo X ou seja a barra de rolagem do rodape
            top: 0 //top = representa o eixo Y ou seja a barra de rolagem lateral
        }*/
        // console.log(savedPosition)

        if(savedPosition){
            return savedPosition;
        }

        if(to.hash){
            return{
                el: to.hash //to.hash deve corresponder a um id de elemento html
            }
            //fragmento = #secao_1 => id= secao_i
        }

        return{
            left: 0,
            top:0
        }

    },
    routes: routes
});

//Guardas de Rotas global
/*
beforeEach - executado antes de entrar na rota de destino - recebe 'to','from', 'next'
to = Destino;
from = Origim;
next = continua //vai ser descontinuado no Vue4
*/
// router.beforeEach((to,from,next) => {
router.beforeEach(() => {
    // console.log('Guarda global beforeEach');
    // console.log(to.meta);

    // if (to.meta.requerAutorizacao) {
    //     console.log('Validar o acesso');
    //     // return false;
    // } else {
    //     console.log('Apenas seguir a navegacao')
    // }

    // console.log('Origem', from);
    // console.log('Destino', to);

    // // verifica se o usuario esta autorizado a acessar aquela rota
    // console.log('M??todo executado antes do acesso a rota destino');
});

/*
afterEach - executado antes de entrar na rota de destino - recebe 'to','from'
to = Destino;
from = Origim;
*/
// router.afterEach((to,from) => {
router.afterEach(() => {
    // console.log('Guarda global afterEach');
    // console.log('Guarda de rota executada ap??s a conclus??o da navegacao');
    // console.log('Origem', from);
    // console.log('Destino', to);
});
/*
beforeResolve - executado antes de navegar, porem ap??s a conclusao das demais guardas de rota - recebe 'to','from'
obs.: executada por ultimo porem antes da guarda de rota afterEach
to = Destino;
from = Origim;
*/
// router.beforeResolve((to,from)=>{
router.beforeResolve(()=>{
    // console.log('Guarda global beforeResolve');
});

export default router;
