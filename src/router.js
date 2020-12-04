import { createWebHistory, createRouter } from 'vue-router'
import AuthPage from '@/components/Auth'

export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Auth',
            component: AuthPage
        }
    ]
})