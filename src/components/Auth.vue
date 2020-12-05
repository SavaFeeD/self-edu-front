<template>
  <section class="vh-100 d-flex align-items-center">
    <div class="container layout">
      <form method="POST" class="card">
        <div class="card-content">
          <span class="card-title text-center">Авторизация</span>
          <div class="col s12">
            <div class="row">
              <div class="input-field col s12">
                <input type="email" class="validate" id="email" v-model.trim="user.email">
                <label for="email">Email</label>
                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="validate" id="password" v-model.trim="user.password">
                <label for="password">Пароль</label>
                <span class="helper-text" data-error="wrong" data-success="right">Helper text</span>
              </div>
            </div>
            <div>
              <button class="btn waves-effect waves-light auth-submit blue darken-1" type="submit">
                Авторизироваться
                <i class="material-icons right">send</i>
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
export default {
  name: "Auth",
  data: ()=>({
    user: {
      email: '',
      password: ''
    }
  })
}
</script>

<style scoped>
.layout {
  width: 100%;
  display: flex;
  justify-content: center;
  transform: translateY(-100px);
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
</style>