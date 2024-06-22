import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {
            path: '/',
            name: 'home',
            component: () => import('@/views/HomeView.vue')
        },
        {
            path: '/shoes',
            name: 'shoes',
            component: () => import('@/views/ShoesView.vue')
        },
        {
            path: '/shoes/:id',
            name: 'show',
            component: () => import('@/views/ProductShowView.vue')
        }
    ]
})

export default router