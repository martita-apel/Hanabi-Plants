<template>
  <div>
    <v-toolbar id="navbar" flat tile max-width="100%">
      <v-toolbar-title>
        <img id="logo" src="../assets/logo.png" alt="logo" />
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <div class="iconos">
        <v-btn text dark class="mr-1" to="/">Inicio</v-btn>
        <v-btn text dark class="mr-1" to="/inventory">Inventario</v-btn>
        <v-btn text dark class="mr-1" id="nav_article" to="/article/1"
          >Blog</v-btn
        >
        <v-btn text dark class="mr-1" to="/login" @click="logout">{{
          currentUser ? "Cerrar Sesión" : "Regístrate"
        }}</v-btn>
        <v-btn icon dark class="mr-1">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon dark class="mr-1">
          <v-icon>mdi-cart</v-icon>
        </v-btn>
        <v-btn icon dark class="mr-1">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </div>

      <v-col id="buscador" class="mt-6 pr-1">
        <v-text-field
          class="mt-5 px-n2"
          prepend-inner-icon="mdi-magnify"
          dark
          filled
          rounded
          dense
        ></v-text-field>
      </v-col>

      <v-menu left dark offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            id="burger"
            class="mt-4 mr-1"
            dark
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon dark>mdi-menu</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item id="block" class="text-center my-2">
            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/">Inicio</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/inventory"
                >Inventario</v-btn
              >
            </v-list-item-title>

            <v-list-item-title>
              <v-btn text dark class="mr-2 my-1" to="/article/1">Blog</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn text dark class="mr-2" to="/login">{{
                currentUser ? "Cerrar Sesión" : "Regístrate"
              }}</v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn icon dark class="mr-2 my-1">
                <v-icon>mdi-heart</v-icon>
              </v-btn>
            </v-list-item-title>

            <v-list-item-title>
              <v-btn icon dark class="mr-2 my-1">
                <v-icon>mdi-cart</v-icon>
              </v-btn>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import firebase from "firebase";

export default {
  name: "Navbar",
  components: {},
  data: () => ({}),
  methods: {
    ...mapActions(["updateUser"]),
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.updateUser(null);
        });
    },
  },
  computed: {
    ...mapState(["currentUser"]),
  },
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
#logo {
  max-width: 200px;
  margin-top: 50px;
}
#buscador {
  min-width: 100px !important;
  max-width: 200px !important;
  display: none;
}

.iconos {
  padding-top: 20px !important;
}
#burger {
  display: none;
}
#block {
  display: none;
}
@media only screen and (max-width: 900px) {
  #burger {
    display: block;
  }
  #block {
    display: block;
  }
  #buscador {
    display: block;
  }
  .iconos {
    display: none;
  }
}
@media only screen and (max-width: 520px) {
  #logo {
    max-width: 150px;
    margin-top: 30px;
  }
}
</style>
