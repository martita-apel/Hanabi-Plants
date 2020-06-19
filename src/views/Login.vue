<template>
  <v-layout column justify-center align-center class="registro">
    <div ref="form" :model="usuario" class="my-15">
      <v-card class="white py-8 px-10" max-width="380">
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

        <v-btn type="submit" color="warning" @click="login">INGRESAR</v-btn>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
import firebase from "firebase";

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
    login(e) {
      e.preventDefault();
      firebase
        .auth()
        .signInWithEmailAndPassword(this.usuario.email, this.usuario.password)
        .then((user) => {
          console.log(user);
          this.$router.push("/");
          alert("Te has registrado con éxito!");
        })
        .catch(() => {
          console.log("Usuario no autenticado");
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
  padding-bottom: 8px;
  margin: auto 0;
}
.bajada {
  font-family: "PT Serif", serif;
  font-weight: 400;
}
</style>
