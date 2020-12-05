<template>
  <div>
    <nav class="nav-extended blue darken-1">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img src="../assets/logo_s.png" alt="logo"></a>
        <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li><a href="#">Authorization</a></li>
          <li><a href="#">Registration</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">List news</a></li>
          <li><a href="#">Categorys</a></li>
          <li><a href="#">Rating</a></li>
        </ul>
      </div>
    </nav>

    <ul class="sidenav" id="mobile-demo" ref="nav">
      <li><a href="#">Authorization</a></li>
      <li><a href="#">Registration</a></li>
      <hr />
      <li><a href="#">Profile</a></li>
      <hr />
      <li><a href="#">List news</a></li>
      <li><a href="#">Categorys</a></li>
      <li><a href="#">Rating</a></li>
    </ul>
  </div>
</template>

<script>
import M from 'materialize-css/dist/js/materialize.min'

export default {
  name: "NavBar",
  mounted() {
    M.Sidenav.init(this.$refs.nav, {});
  }
}
</script>

<style scoped>

</style>