import {createStore} from "vuex";

export default createStore({
    state: () => ({
        user_token: JSON.parse(localStorage.getItem('token')) || '0keHIqsfb92MaMtBH0PFpiRBo4rY23yTqwcfU9S5msLGzDUSgwsKdouPahvHg3ebUhjRGh',
        user_id: null,
        roles: [],
        errors: [],
        category: [],
        categories: [],
        one_branch: {},
        obj_branch: {},
    }),
    mutations: {
        createUser(state, user){
            state.user_id = user.body.user;
        },
        saveRole(state, role){
            state.roles = role;
        },
        saveCategory(state, category){
            state.category = category;
        },
        setCategory(state, category){
            state.categories.push(category);
        },
        saveBranch(state, branch) {
            state.one_branch = branch;
        },
        saveListBranch(state, obj_branch) {
            state.obj_branch = obj_branch
        }
    },
    actions: {
        async registerUser({commit}, data){
            const res = await fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/signup', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
            const user = await res.json();
            commit('createUser', user)
            return user;
        },
        async getRoles({commit}){
            const res = await fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/role');
            const role = await res.json();
            commit('saveRole', role)
        },
        async getCategories({commit}){
            const res = await fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/category');
            const category = await res.json();
            commit('saveCategory', category);
        },
        async getOneBranch({commit}, id){
            const token = this.state.user_token;
            const res = await fetch(`http://u96872.test-handyhost.ru/self-edu-backend/public/api/branch/${id}`, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            const branch = await res.json();
            commit('saveBranch', branch);
        },
        async getListBranch({commit}, page){
            const token = this.state.user_token;
            const res = await fetch(`http://u96872.test-handyhost.ru/self-edu-backend/public/api/branch?page="${page}"`, {
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });
            const obj_branch = await res.json();
            commit('saveListBranch', obj_branch);
        },
    },
    getters: {
        getUserId: state => {
            return state.user_id;
        },
        getRoles: state => {
            return state.roles;
        },
        getErrors: state => {
            return state.errors;
        },
        getCategory: state => {
            return state.category;
        },
        getCat: state => {
            return state.categories
        },
        getToken: state => state.user_token,
        branch: state => state.one_branch,
        branches: state => state.obj_branch,
    }
})