import { createWebHistory, createRouter } from "vue-router";
import Login from '../views/Login.vue'
import Game from '../views/Game.vue'

const history = createWebHistory();
const router = createRouter({
    history,
    routes: [
        {
            path: '/',
            component: Login
        },
        {
            path: '/game',
            component: Game
        }
    ]
});

export default router;

/* import { createApp } from 'vue'
import VueRouter from "vue-router";
import Login from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [

    {
        path:'/',
        redirect: {
           name: 'Login'
        }
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router; */