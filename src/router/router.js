import {createRouter,createWebHashHistory} from 'vue-router'

const routes = [
    {
        path:'/estudiante',
        component: () => import('../page/EstudiantePage.vue')
    },
    {
        path:'/token',
        component: () => import('../page/TokenPage.vue')
    }
    
]

const router = createRouter({history: createWebHashHistory(),routes})

export default router