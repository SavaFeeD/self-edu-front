import { createWebHistory, createRouter } from 'vue-router'
import AuthPage from '@/components/Auth'
import ListNews from "@/components/ListNews";
import Auth from "./components/Auth";

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
        },
        {
            path: '/auth',
            name: 'Auth',
            component: Auth
        }
    ]
})