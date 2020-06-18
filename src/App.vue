<template>
  <v-app>
    <Navbar id="navbar" />
    <router-view id="vista"></router-view>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Footer,
  },
  data: () => ({}),
};
</script>

<style>
.logo {
  max-width: 230px;
  margin-top: 55px;
}
.iconos {
  padding-top: 20px !important;
}
#navbar {
  position: absolute;
  /*   z-index: 2;
 */
}
</style>
