<template>
  <v-layout column justify-center align-center class="registro">
    <div ref="form" :model="usuario" class="my-15">
      <v-card
        id="login_card"
        class="white py-8 px-10 rounded-xl"
        max-width="380"
      >
        <h1 class="ma-0 py-0 text--secondary text-center titulo">
          Iniciar Sesión
        </h1>
        <v-divider class="my-3"></v-divider>
        <h4 class="text--secondary text-center bajada">
          Para que puedas registrar una nueva planta en
          <b><i>Hanabi Plantas</i></b
          >, es necesario que accedas con tu cuenta.
        </h4>
        <br />
        <v-text-field
          v-model="usuario.email"
          name="email"
          type="text"
          label="Ingresa tu email"
          prepend-inner-icon="mdi-email"
          required
          outlined
        ></v-text-field>

        <v-text-field
          v-model="usuario.password"
          name="password"
          :counter="20"
          label="Ingresa tu contraseña"
          :type="showPassword ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          required
          outlined
        ></v-text-field>

        <v-btn id="ingresar_boton" type="submit" color="warning" @click="login"
          >INGRESAR</v-btn
        >
      </v-card>
    </div>
  </v-layout>
</template>

<script>
import { mapActions } from "vuex";
import firebase from "firebase";
import swal from "sweetalert";

export default {
  name: "Login",
  data() {
    return {
      showPassword: false,
      usuario: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["updateUser"]),
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((user) => {
          console.log(user);
          let usuario = this.usuario.email;
          this.updateUser(usuario);
          this.$router.push("/");
          swal("Te has registrado con éxito!");
        })
        .catch(() => {
          this.updateUser(null);
          alert("¡Error al iniciar sesión!");
        });
    },
  },
};
</script>

<style scoped>
.registro {
  background-image: url("../assets/login.png");
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}
.titulo {
  font-family: "PT Serif", serif !important;
  font-size: 40px;
  padding-bottom: 8px;
  margin: auto 0;
}
.bajada {
  font-family: "PT Serif", serif;
  font-weight: 400;
}

@media only screen and (max-width: 450px) {
  #login_card {
    margin: 10px 20px;
  }
  .titulo {
    font-size: 30px;
  }
}
</style>
