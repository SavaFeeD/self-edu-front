import {createStore} from "vuex";

export default createStore({
    state: () => ({
        user_token: JSON.parse(localStorage.getItem('token')) || 'SuNJSJBoDzZDTwe1mZYDi753LSVSzZ3rBCISdXpSgZX2MD6PPhDRYbY77GtKwprA7G3V6w',
        user_id: null,
        roles: [],
        errors: [],
        category: [],
        categories: []
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
            state.categories.push(category)
        },
        setToken(state, token){
            state.token = token;
            localStorage.setItem('token', JSON.stringify(state.token));
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
            return state.categories;
        },
        getToken: state => state.user_token
    }
})