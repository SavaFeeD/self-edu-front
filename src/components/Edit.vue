<template>
  <div>
    <navbar></navbar>
    <div>
      <form class="d-flex flex-column">
        <div class="input-field">
          <i class="material-icons prefix">device_hub</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">Соц. сеть</label>
          <span class="helper-text" data-error="wrong" data-success="right">Введите ссылку</span>
        </div>
        <div class="d-flex justify-content-center">
          <button type="submit" class="btn btn-block w-50" @click.prevent="EditProfile">Редактировать</button>
        </div>
      </form>
    </div>

  </div>

</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'
import NavBar from "@/components/NavBar";

export default {
  name: "Edit",
  components: {
    'navbar': NavBar
  },
  data: ()=>({
    social_city: null
  }),
  mounted() {
    M.updateTextFields();
  },
  methods: {
    EditProfile() {

    },
    getSocial(){
      fetch('http://u96872.test-handyhost.ru/self-edu-backend/public/api/social', {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
        },
      })
    }
  }
}
</script>

<style scoped>

form{
  padding-top: 70px;
  max-width: 100vw!important;
}

.mw-100{
  max-width: 100vw!important;
}

.input-field, .input-field *{
  max-width: 95vw!important;
}
label{
  width: 100px!important;
}
</style>