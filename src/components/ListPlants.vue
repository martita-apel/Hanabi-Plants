<template>
  <div class="list_plants">
    <v-card
      class="mx-auto"
      min-width="200"
      max-width="400"
      v-for="p in plants"
      :key="p.id"
    >
      <v-img height="250px" :src="p.data.image"> </v-img>
      <v-card-title class="card_titulo dark--text">{{
        p.data.name
      }}</v-card-title>

      <v-card-subtitle class="pb-0"
        ><i>{{ p.data.category }}</i></v-card-subtitle
      >

      <v-card-text class="text--primary">
        <div>{{ p.data.description }}</div>
      </v-card-text>

      <v-card-actions class="mb-2 mx-1">
        <span>{{ p.data.price }}</span>
        <span>{{ p.data.stock }}</span>

        <v-btn color="orange" text>
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn icon color="red darken-1">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon color="teal darken-4">
          <v-icon>mdi-tag</v-icon>
        </v-btn>
        <v-btn icon color="grey darken-4">
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "ListPlants",
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState(["plants"]),
  },
  methods: {
    ...mapActions(["getPlants"]),
  },
  created() {
    this.getPlants();
  },
};
</script>

<style scoped>
.home_titulo {
  font-family: "PT Serif", serif;
  font-size: 5rem;
  text-align: center;
  font-weight: 400;
  line-height: 90px;
  color: white;
  margin: auto;
  padding: 150px 0 20px 0;
}
.card_titulo {
  font-size: 22px;
  font-weight: bold;
}
</style>
