import { createRouter, createWebHistory } from 'vue-router'
import { firebase } from '../firebase'

const routes = [

    {
        path: '/',
        name: 'Acceso',

        component: () =>
            import ('../views/Acceso.vue'),


    },
    {
        path: '/inicio',
        name: 'Inicio',

        component: () =>
            import ('../views/Inicio.vue'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/registro',
        name: 'Registro',

        component: () =>
            import ('../views/Registro.vue')
    },
    {
        path: '/editar/:id',
        name: 'Editar',

        component: () =>
            import ('../views/Editar.vue'),
        meta: {
            requireAuth: true,
        }
    },
    {
        path: '/agregar',
        name: 'Agregar',

        component: () =>
            import ('../views/Agregar.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach(async(to, from, next) => {
    const requireAuth = to.matched.some(record => record.meta.requireAuth)
    if (requireAuth && !(await firebase.getCurrentUser())) {
        next("/")
    } else {
        next()
    }
})

export default router