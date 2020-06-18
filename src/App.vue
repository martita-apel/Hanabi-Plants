<template>
  <v-app id="app">
    <h1>hola</h1>
    <footer class="fixed">
      <div class="iconos container-fluid py-3">
        <a class="btn-floating btn-fb mx-3 rrss"
          ><i class="fab fa-facebook-f"> </i
        ></a>
        <a class="btn-floating btn-tw mx-3 rrss">
          <i class="fab fa-twitter"> </i>
        </a>
        <a class="btn-floating btn-gplus mx-3 rrss">
          <i class="fab fa-google-plus-g"> </i>
        </a>
        <a class="btn-floating btn-li mx-3 rrss">
          <i class="fab fa-linkedin-in"> </i>
        </a>
      </div>
      <div class="dark text-center py-4">
        © 2020 Copyright
      </div>
    </footer>
  </v-app>
</template>

<script>
export default {
  name: "Home",
  components: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
.navbar {
  background-image: url("./assets/plantas.png");
  background-size: cover;
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
} */
</style>
