import { createWebHistory, createRouter } from 'vue-router'
import ListNews from "@/components/ListNews";
import Register from "./components/Register";
import Auth from "@/components/Auth";
import Profile from '@/components/Profile'
import Settings from '@/components/Settings'
import Edit from "@/components/Edit";
import CreateBranch from "@/components/CreateBranch"
import Search from "@/components/Search";

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

            path: '/register',
            name: 'Register',
            component: Register
        },
        {
            path: '/profile/:id',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/profile/:id/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/profile/:id/edit',
            name: 'Edit',
            component: Edit
        },
        {
            path: '/create-branch',
            name: 'CreateBranch',
            component: CreateBranch
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
})