<template>
  <div>
    <v-toolbar id="navbar" flat tile max-width="100%">
      <v-toolbar-title>
        <img class="logo" src="../assets/logo.png" alt="logo" />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="iconos">
        <v-btn text dark class="mr-2" to="/">Inicio</v-btn>
        <v-btn text dark class="mr-2" to="/about">About</v-btn>
        <v-btn text dark class="mr-2" to="/login">Regístrate</v-btn>

        <v-btn icon dark>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon dark>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-app-bar-nav-icon dark></v-app-bar-nav-icon>
      </div>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  components: {},
  data: () => ({}),
};
</script>

<style>
#navbar {
  margin: 0;
  padding: 0;
  height: 0;
  min-width: 100%;
  background-color: transparent;
}
.logo {
  max-width: 230px;
}
.iconos {
  padding-top: 20px !important;
}
</style>
