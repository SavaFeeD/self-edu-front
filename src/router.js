import { createWebHistory, createRouter } from 'vue-router'
import AuthPage from '@/components/Auth'
import ListNews from "@/components/ListNews";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: AuthPage
        },
        {
            path: '/news',
            name: 'News',
            component: ListNews
        }
    ]
})