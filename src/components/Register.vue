<template>
    <section class="vh-100 d-flex align-items-center">
        <div class="layout">
            <div class="card card-emp">
                <div class="card-content scrollEl">
                    <span class="card-title text-center">Регистрация</span>
                    <div class="col s12">
                        <div class="input-field col s12">
                            <input type="text" :class="[errors.fio ? 'invalid' : '', 'validate']" id="fio"
                                   v-model.trim="user.fio">
                            <label for="fio">ФИО</label>
                            <span class="helper-text" :data-error="errors.fio" data-success="right"
                                  v-if="errors.fio"></span>
                        </div>
                        <div class="input-field col s12">
                            <input type="email" :class="[errors.email ? 'invalid' : '', 'validate']" id="email"
                                   v-model.trim="user.email">
                            <label for="email">Email</label>
                            <span class="helper-text" :data-error="errors.email" data-success="right"
                                  v-if="errors.email">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="text" :class="[errors.login ? 'invalid' : '', 'validate']" id="login"
                                   v-model.trim="user.login">
                            <label for="login">Логин</label>
                            <span class="helper-text" :data-error="errors.login" data-success="right"
                                  v-if="errors.login">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="password" :class="[errors.password ? 'invalid' : '', 'validate']" id="password"
                                   v-model.trim="user.password">
                            <label for="password">Пароль</label>
                            <span class="helper-text" :data-error="errors.password" data-success="right"
                                  v-if="errors.password">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="password" :class="[errors.password ? 'invalid' : '', 'validate']"
                                   id="password_confirmation" v-model.trim="user.password_confirmation">
                            <label for="password_confirmation">Подтверждение пароля</label>
                            <span class="helper-text" :data-error="errors.password_confirmation" data-success="right"
                                  v-if="errors.password_confirmation">Helper text</span>
                        </div>
                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light blue-el"
                                    @click="scrollRight">
                                <i class="material-icons right">arrow_forward</i>
                            </button>
                        </div>
                        <router-link to="/auth" class="ml-3 f-size">Авторизация</router-link>
                    </div>
                </div>
            </div>
            <div class="card card-emp role">
                <div class="card-content scrollEl">
                    <span class="card-title text-center">Выберите роль</span>
                    <div class="col s12">
                        <p class="radio-wrapper mt-3" v-for="(item, key) in getRoles" :key="key">
                            <label>
                                <input class="with-gap" name="role_id" type="radio" v-model="user.role_id"
                                       :value="item.id"/>
                                <span>{{ item.name }}</span>
                            </label>
                        </p>
                        <span class="helper-text" v-if="errors.role_id" id="role_error">{{ errors.role_id }}</span>
                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light blue-el" @click="scrollLeft">
                                <i class="material-icons right">arrow_back</i>
                            </button>
                            <button class="btn-floating btn-large waves-effect waves-light blue-el"
                                    @click="firstSubmit">
                                <i class="material-icons right">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-emp">
                <div class="card-content scrollEl">
                    <span class="card-title text-center">Выберите интересы</span>
                    <div class="col s12 interesting">
                        <p class="mt-3 init" v-for="(item, key) in getCategories" :key="key">
                            <label>
                                <input type="checkbox" class="filled-in" :value="item.id" @change="setInit"/>
                                <span>{{ item.name }}</span>
                            </label>
                        </p>
                        <span class="helper-text" data-success="right" v-if="error_init">{{ error_init }}</span>
                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light green accent-4"
                                    @click="selectInit">
                                <i class="material-icons right">check</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Register",
        data: () => ({
            user: {
                fio: '',
                email: '',
                login: '',
                password: '',
                password_confirmation: '',
                role_id: null
            },
            scrollEl: null,
            favorites: [],
            roles: [],
            errors: [],
            error_init: ''
        }),
        created() {
            this.$store.dispatch('getRoles');
            this.$store.dispatch('getCategories');
        },
        computed: {
            getRoles() {
                return this.$store.getters.getRoles;
            },
            getCategories() {
                console.log(this.$store.getters.getCategory);
                return this.$store.getters.getCategory;
            }
        },
        methods: {
            scrollRight() {
                this.scrollEl = document.querySelectorAll('.scrollEl');
                this.scrollEl.forEach((item) => {
                    item.style.transform += `translateX(-500px)`;
                })
            },
            scrollLeft() {
                this.scrollEl = document.querySelectorAll('.scrollEl');
                this.scrollEl.forEach((item) => {
                    item.style.transform += `translateX(500px)`;
                })
            },
            firstSubmit() {
                this.$store.dispatch('registerUser', this.user).then(res => {
                    if (res.code === 422) {
                        this.scrollLeft();
                        this.errors = res.body;
                        console.log(this.errors)
                    } else if (res.code === 201) {
                        this.$store.commit('createUser', res);
                        this.scrollRight();
                        console.log(this.$store.getters.getUserId);
                    }
                })
            },
            setInit(event) {
                if (this.favorites.includes(parseInt(event.target.value))) {
                    this.favorites.forEach((item, key) => {
                        if (item === parseInt(event.target.value)) {
                            this.favorites.splice(key, 1);
                        }
                    });
                } else {
                    this.favorites.push(parseInt(event.target.value));
                }
            },
            selectInit() {
                if (this.favorites.length !== 0) {
                    fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/user/category', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            user_id: this.$store.getters.getUserId,
                            favorites: this.favorites
                        })
                    })
                        .then(res => res.json())
                        .then(res => {
                        console.log(res);
                    });
                    fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/login', {
                        method: "POST",
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: this.user.email,
                            password: this.user.password
                        })
                    })  .then(res => res.json())
                        .then(res => {
                        if (res.code === 200) {
                            this.$store.commit('setToken', res.body.token);
                            this.$router.push('/') // После успешной аутификации делаем редирект на главную
                        }
                    });
                } else {
                    this.error_init = 'Выберите темы которые вам интересны';
                }
            }
        }
    }
</script>

<style scoped>
    #role_error {
        margin-top: 15px;
        margin-left: 5px;
    }

    .interesting p {
        margin-bottom: 40px;
    }

    .f-size {
         font-size: 16px;
    }
    .interesting span {
        font-size: 18px !important;
    }

    .interesting input[type="checkbox"].filled-in + span:not(.lever):after,
    .interesting input[type="checkbox"].filled-in + span:not(.lever):before {
        top: 3px;
    }

    .interesting input[type="checkbox"].filled-in:checked + span:not(.lever):after,
    .interesting input[type="checkbox"].filled-in:checked + span:not(.lever):before {
        background: #1E88E5;
    }

    .card-title {
        font-size: 35px;
        margin-bottom: 40px !important;
    }

    button {
        margin-left: 15px;
    }

    .input-field {
        margin-bottom: 20px !important;
    }

    .layout {
        width: 100%;
        transform: translateY(-50px);
        position: relative;
    }

    .active {
        color: #1E88E5 !important;
    }

    .input-field input[type=text]:focus, .input-field input[type=password]:focus, .input-field input[type=email]:focus {
        border-bottom: 1px solid #1E88E5 !important;
    }

    .helper-text {
        color: red;
    }

    .card {
        position: absolute;
        top: -300px;
        box-shadow: none !important;
        border: none !important;
    }

    .card:nth-child(2) {
        left: 500px;
    }

    .card:nth-child(3) {
        left: 1000px;
    }

    section {
        border-top: 20px solid #1E88E5 !important;
        overflow-x: hidden;
    }

    .blue-el {
        background: #1E88E5 !important;
    }

    .card-emp {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .scrollEl {
        transition: .5s;
    }

    .radio-wrapper {
        background: linear-gradient(90deg, #0984e3 0%, #74b9ff 100%);
        padding: 13px 10px 7px 10px;
        border-radius: 7px;
    }

    .radio-wrapper span {
        color: #fff;
        font-weight: 700;
        font-size: 15px;
    }

    .radio-wrapper input[type=radio] + span::before {
        background: #273c75;
        border: none !important;
    }

    .radio-wrapper input[type="radio"]:checked + span:after, [type="radio"].with-gap:checked + span:after,
    .radio-wrapper input[type="radio"]:checked + span:after {
        background: #fff !important;
    }

    .role {
        transform: translateY(100px);
    }
</style>