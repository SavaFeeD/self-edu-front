<template>
  <div>
    <navbar></navbar>

    <div class="row pt-5">
      <form class="col s12 mt-3">
        <div class="row">
          <div class="input-field col s6">
            <i class="material-icons prefix">device_hub</i>
            <input id="icon_prefix" type="text" class="validate">
            <label for="icon_prefix">Соц. сеть</label>
            <span class="helper-text" data-error="wrong" data-success="right">Введите ссылку</span>
          </div>

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
  mounted() {
    M.updateTextFields();
  }
}
</script>

<style scoped>

</style>