import { createWebHistory, createRouter } from 'vue-router'
import ListNews from "@/components/ListNews";
import Auth from "./components/Auth";

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
        }
    ]
})