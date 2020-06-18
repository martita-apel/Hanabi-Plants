<template>
  <div class="home">
    <v-card id="navbar" color="grey lighten-4" flat height="200px" tile>
      <v-toolbar extended extension-height="100">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-toolbar-title>hola</v-toolbar-title>

        <v-spacer></v-spacer>
        <router-link to="/">Home</router-link> |

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <router-link to="/about">About</router-link>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-btn depressed small>Normal</v-btn>

    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from "@/components/HelloWorld.vue";
 */
export default {
  name: "Home",
  components: {
    /*     HelloWorld,
     */
  },
};
</script>

<style>
.home {
  background-image: url("../assets/plantas.png");
  background-size: cover;
}
</style>
