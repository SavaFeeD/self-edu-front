<template>
    <section class="h-100 d-flex align-items-center">
        <div class="layout">
            <div class="card card-emp">
                <div class="card-content scrollEl">
                    <span class="card-title text-center">Регистрация</span>
                    <div class="col s12">
                        <div class="input-field col s12">
                            <input type="text" class="validate" id="fio" v-model.trim="user.fio">
                            <label for="fio">ФИО</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="email" class="validate" id="email" v-model.trim="user.email">
                            <label for="email">Email</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="text" class="validate" id="login" v-model.trim="user.login">
                            <label for="login">Логин</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="password" class="validate" id="password" v-model.trim="user.password">
                            <label for="password">Пароль</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        <div class="input-field col s12">
                            <input type="password" class="validate" id="password_confirmation" v-model.trim="user.password_confirmation">
                            <label for="password_confirmation">Подтверждение пароля</label>
                            <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                        <div class="d-flex justify-content-center">
                            <button class="btn-floating btn-large waves-effect waves-light blue-el" @click="scrollRight">
                                <i class="material-icons right">arrow_forward</i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card card-emp role">
                <div class="card-content scrollEl">
                    <span class="card-title text-center">Выберите роль</span>
                    <div class="col s12">
                        <p class="radio-wrapper mt-3">
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Преподаватель</span>
                            </label>
                        </p>
                        <p class="radio-wrapper mt-3">
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Студент</span>
                            </label>
                        </p>
                        <p class="radio-wrapper mt-3">
                            <label>
                                <input class="with-gap" name="group1" type="radio"  />
                                <span>Родитель</span>
                            </label>
                        </p>
                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light blue-el" @click="scrollLeft">
                                <i class="material-icons right">arrow_back</i>
                            </button>
                            <button class="btn-floating btn-large waves-effect waves-light blue-el" @click="scrollRight">
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
                        <p class="mt-3">
                            <label>
                                <input type="checkbox" class="filled-in"/>
                                <span>Математика</span>
                            </label>
                        </p>
                        <p class="mt-3">
                            <label>
                                <input type="checkbox" class="filled-in"/>
                                <span>Химия</span>
                            </label>
                        </p>
                        <p class="mt-3">
                            <label>
                                <input type="checkbox" class="filled-in"/>
                                <span>Физика</span>
                            </label>
                        </p>
                        <p class="mt-3">
                            <label>
                                <input type="checkbox" class="filled-in"/>
                                <span>Физика</span>
                            </label>
                        </p>
                        <p class="mt-3">
                            <label>
                                <input type="checkbox" class="filled-in"/>
                                <span>Физика</span>
                            </label>
                        </p>
                        <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light blue-el" @click="scrollLeft">
                                <i class="material-icons right">arrow_back</i>
                            </button>
                            <button class="btn-floating btn-large waves-effect waves-light green accent-4" @click="submit">
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
        data: ()=>({
            user: {
                fio: '',
                email: '',
                login: '',
                password: '',
                password_confirmation: ''
            },
            scrollEl: null
        }),
        methods: {
            scrollRight() {
                this.scrollEl = document.querySelectorAll('.scrollEl');
                this.scrollEl.forEach((item)=>{
                    item.style.transform += `translateX(-500px)`;
                })
            },
            scrollLeft() {
                this.scrollEl = document.querySelectorAll('.scrollEl');
                this.scrollEl.forEach((item)=>{
                    item.style.transform += `translateX(500px)`;
                })
            },
            submit(){

            }
        }
    }
</script>

<style scoped>
    .interesting span{
        font-size: 18px !important;
    }
    .interesting input[type="checkbox"].filled-in+span:not(.lever):after,
    .interesting input[type="checkbox"].filled-in+span:not(.lever):before {
        top: 3px;
    }
    .interesting input[type="checkbox"].filled-in:checked+span:not(.lever):after,
    .interesting input[type="checkbox"].filled-in:checked+span:not(.lever):before {
        background: #1E88E5;
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
.input-field input[type=text]:focus, .input-field input[type=password]:focus, .input-field input[type=email]:focus  {
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
.card:nth-child(2){
    left: 500px;
}
.card:nth-child(3){
    left: 1000px;
}
section {
    border-top: 20px solid #1E88E5 !important;
    overflow: hidden;
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
    }
    .radio-wrapper input[type=radio]+span::before{
        background: #273c75;
        border: none !important;
    }
    .radio-wrapper input[type="radio"]:checked+span:after, [type="radio"].with-gap:checked+span:after,
    .radio-wrapper input[type="radio"]:checked+span:after{
        background: #fff !important;
    }
    .role {
        transform: translateY(100px);
    }
</style>