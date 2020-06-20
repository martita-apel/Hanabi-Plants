<template>
  <div class="list_plants">
    <v-row>
      <v-card
        id="card_plant"
        cols="6"
        sm="2"
        class="mx-auto my-2"
        min-width="150"
        max-width="400"
        v-for="p in plants"
        :key="p.id"
      >
        <v-img min-height="200px" max-height="500px" :src="p.data.image">
        </v-img>
        <v-card-title class="card_titulo dark--text text--secondary">{{
          p.data.name
        }}</v-card-title>

        <v-card-subtitle class=" overline pb-0">{{
          p.data.category
        }}</v-card-subtitle>

        <v-card-text class="text--secondary">
          <div>{{ p.data.description }}</div>
        </v-card-text>

        <v-divider class="mx-4"></v-divider>

        <v-card-actions class="mb-2 mx-1">
          <v-card-subtitle class="overline py-0 pl-2"
            >$ {{ p.data.price }}</v-card-subtitle
          >
          <v-card-subtitle class="overline py-0 pl-2"
            >{{ p.data.stock }} /u</v-card-subtitle
          >

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
    </v-row>
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
.list_plants {
  position: relative;
}
#card_plant {
  height: fit-content;
}
.card_titulo {
  font-size: 22px;
  font-weight: bold;
}
</style>
