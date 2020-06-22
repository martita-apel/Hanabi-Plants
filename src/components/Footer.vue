<template>
  <v-footer dark padless>
    <v-card flat tile class="grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="30px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text mx-auto pt-0" style="max-width:70%">
        Ayúdanos a crear la mejor plataforma de plantas del mundo, donde podrás
        descubrir, compartir e inspirarte con nuevas ideas, y hacer de tu mundo
        un mundo más natural. Si quieres saber más, contáctanos a través de
        nuestras redes sociales.
      </v-card-text>

      <v-divider class="mx-auto my-2" style="max-width:80%"></v-divider>

      <v-card-text class="white--text my-2">
        {{ new Date().getFullYear() }} — <strong>Hanabi Plantas, Chile</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  components: {},
  data() {
    return {
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>

<style></style>
