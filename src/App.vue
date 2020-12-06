<template>
  <div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
}

</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~materialize-css/dist/css/materialize.min.css";
@import "https://fonts.googleapis.com/icon?family=Material+Icons";

  .vh-100 {
    height: 100vh !important;
  }

  main{
    padding-top: 66px;
  }

  .у{
    color: #f9a825;
  }
  .п{
    color: #558b2f;
  }
  .р{
    color: #ff3d00;
  }

</style>