<template>
  <div class="home">
    <div id="home_img" class="text-center">
      <h1 class="home_titulo">
        Temporada de <br />
        Plantas de Interior
      </h1>
      <v-divider
        class="mx-auto mb-8"
        color="white"
        style="max-width:200px"
      ></v-divider>
      <h2 class="home_parrafo">
        Para este invierno, trabajamos en una nueva sección sobre el cuidado de
        sus plantas de interior, con muchos datos que les servirán para que
        estén radiantes y sanas esta próxima primavera. Revisa el artículo
        <v-btn small class="home_link" to="/article/post"><i> aquí.</i></v-btn>
      </h2>

      <Register-modal v-if="currentUser" />
      <v-btn
        v-else
        class="my-10 text-center"
        large
        outlined
        rounded
        color="white"
        @click="noRegister"
        >Registra tu planta</v-btn
      >
    </div>

    <ListPlants id="lista_plantas" />

    <v-overlay :value="loading">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import RegisterModal from "@/components/RegisterModal.vue";
import ListPlants from "@/components/ListPlants.vue";

import { mapState } from "vuex";

export default {
  name: "Home",
  components: {
    RegisterModal,
    ListPlants,
  },
  data() {
    return {};
  },
  computed: {
    ...mapState(["currentUser", "loading"]),
  },
  methods: {
    noRegister() {
      this.$router.push("/login");
    },
  },
};
</script>

<style>
.home_titulo {
  font-family: "PT Serif", serif;
  font-size: 5rem;
  text-align: center;
  line-height: 90px;
  color: white;
  margin: auto;
  padding: 150px 0 20px 0;
}
.home_parrafo {
  font-family: "PT Serif", serif;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 30px;
  text-align: center;
  color: white;
  max-width: 70%;
  margin: auto;
}
.home_link {
  font-weight: 700;
  color: white;
}
#home_img {
  background-image: url("../assets/plantas.png");
  background-size: cover;
  min-width: 100%;
  min-height: 670px;
}
#lista_plantas {
  margin: 20px;
}
@media only screen and (max-width: 900px) {
  .home_titulo {
    font-size: 4rem;
    line-height: 70px;
    padding: 140px 0 20px 0;
  }
}
@media only screen and (max-width: 756px) {
  .home_titulo {
    font-size: 3rem;
    line-height: 50px;
    padding: 140px 0 20px 0;
  }
  .home_parrafo {
    font-size: 1.2rem;
    line-height: 25px;
  }
  #home_img {
    min-height: 600px;
  }
}
@media only screen and (max-width: 520px) {
  .home_titulo {
    font-size: 2.3rem;
    line-height: 40px;
    padding: 120px 0 20px 0;
  }
  #home_img {
    min-height: 550px;
  }
}
</style>
