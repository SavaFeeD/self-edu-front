<template>
    <section class="vh-100 d-flex align-items-center">
        <div class="container layout">
            <div class="card card-emp">
                <div class="card-content card-emp">
                    <span class="card-title text-center">Авторизация</span>
                    <div class="col s12">
                        <div class="input-field col s12">
                            <input type="email" :class="[errors.email ? 'invalid' : '', 'validate']" id="email" v-model.trim="user.email">
                            <label for="email">Email</label>
                            <span class="helper-text" :data-error="errors.email" data-success="right" v-if="errors.email"></span>
                        </div>
                        <div class="input-field col s12">
                            <input type="password" :class="[errors.password ? 'invalid' : '', 'validate']" id="password" v-model.trim="user.password">
                            <label for="password">Пароль</label>
                            <span class="helper-text" :data-error="errors.password" data-success="right" v-if="errors.password"></span>
                        </div>
                        <span class="helper-text ml-3" data-success="right" v-if="error_403">{{ error_403 }}</span>
                          <div class="d-flex justify-content-center mt-3">
                            <button class="btn-floating btn-large waves-effect waves-light green accent-4" @click="setUser">
                              <i class="material-icons right">check</i>
                            </button>
                          </div>
                        <router-link to="/register" class="ml-3 f-size">Регистрация</router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Auth",
        data: () => ({
            user: {
                email: '',
                password: ''
            },
            errors: [],
            error_403: ''
        }),
        methods: {
          setUser(){
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
                        this.$router.push('/'); // После успешной аутификации делаем редирект на главную
                  }else if(res.code === 403){
                      console.log(res);
                      this.error_403 = res.message;
                  }else if(res.code === 422){
                      this.errors = res.body;
                  }
            });
          }
        }
    }
</script>

<style scoped>
    .layout {
        width: 100%;
        display: flex;
        justify-content: center;
        transform: translateY(-50px);
        position: relative;
    }
    .card {
      position: absolute;
      top: -200px;
    }
    .card-title {
      font-size: 35px;
      margin-bottom: 40px !important;
    }

    .card-emp {
        width: 100%;
    }

    .input-field {
      margin-bottom: 20px !important;
    }

    .input-field input {
      width: 100%;
    }

    .f-size {
        font-size: 16px;
    }

    .active {
        color: #1E88E5 !important;
    }

    .input-field input[type=email]:focus, .input-field input[type=password]:focus {
        border-bottom: 1px solid #1E88E5 !important;
    }

    .helper-text {
        color: red;
    }

    .card {
        box-shadow: none !important;
        border: none !important;
    }

    section {
        border-top: 20px solid #1E88E5 !important;
    }

    .blue-el {
        background: #1E88E5 !important;
    }
</style>