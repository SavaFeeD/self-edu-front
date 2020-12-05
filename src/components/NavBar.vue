<template>
  <div class="position-fixed w-100 vh-100 d-flex flex-column justify-content-between">
    <nav class="nav-extended blue darken-1">
      <div class="nav-wrapper">
        <a href="#" class="brand-logo"><img src="../assets/logo_s.png" alt="logo"></a>
      </div>
    </nav>

    <nav class="nav-extended blue darken-1 down-menu">
      <div class="h-100 row nav-wrapper">
          <a href="#" class="col-4 material-icons d-flex justify-content-center align-items-center h-100">home</a>
          <a href="#" class="col-4 material-icons d-flex justify-content-center align-items-center h-100">search</a>
          <a href="#" class="col-4 material-icons d-flex justify-content-center align-items-center h-100">person</a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavBar"
}
</script>

<style scoped>
a.brand-logo{
  display: flex;
  padding: 7px;
}
.brand-logo img{
  width: 41px;
}
nav.down-menu{
  height: 50px;
}
.vh-100{
  height: calc(90.7vh - 50px)!important;
}
</style>