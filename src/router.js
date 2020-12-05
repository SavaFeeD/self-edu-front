import { createWebHistory, createRouter } from 'vue-router'
import ListNews from "@/components/ListNews";
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
            path: '/profile/:slug',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/profile/:slug/settings',
            name: 'Settings',
            component: Settings
        },
        {
            path: '/profile/:slug/edit',
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