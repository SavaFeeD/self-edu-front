import { createWebHistory, createRouter } from 'vue-router'
import AuthPage from '@/components/Auth'
import ListNews from "@/components/ListNews";
import Auth from "./components/Auth";
import Register from "./components/Register";

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
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        }
    ]
})