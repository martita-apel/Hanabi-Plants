<template>
  <v-footer dark padless>
    <v-card flat tile class="grey darken-4 white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3 white--text" icon>
          <v-icon size="30px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text mx-auto pt-0" style="max-width:70%">
        Ayúdanos a crear el mejor buscador de plantas del mundo. A luctus
        accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a
        sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula
        lacinia malesuada.
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
