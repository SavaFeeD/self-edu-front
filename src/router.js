import { createWebHistory, createRouter } from 'vue-router'
import ListNews from "@/components/ListNews";
import Auth from "./components/Auth";
import Profile from '@/components/Profile'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'News',
            component: ListNews
        },
        {
            path: '/auth',
            name: 'Auth',
            component: Auth
        },
        {
            path: '/profile/:slug',
            name: 'Profile',
            component: Profile
        }
    ]
})