import Vue from 'vue'
import Router from 'vue-router'
import Pagina from '@/views/Pagina'
import Login from '@/views/auth/Login'
import Error from '@/views/Error';
import Administrador from '@/views/Administrador'
import Bienvenida from '@/views/vistas-pagweb/quienes-somos/Bienvenida'


Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/pagina',
            name: 'pagina',
            component: Pagina
        },

        {
            path: '/administrador',
            name: 'administrador',
            component: Administrador
        },

        {
            path: '/login',
            name: 'login',
            component: Login
        },
        
        {
            path: '/bienvenida',
            name: 'bienvenida',
            component: Bienvenida
        },

        {

            path : '*',
            name : 'error',
            component: Error
        }
    ]
})