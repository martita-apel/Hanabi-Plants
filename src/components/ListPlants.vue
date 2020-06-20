<template>
  <div class="list_plants">
    <v-row>
      <v-card
        id="card_plant"
        cols="6"
        sm="2"
        class="mx-auto my-2"
        min-width="150"
        max-width="300"
        v-for="p in plants"
        :key="p.id"
      >
        <v-hover v-slot:default="{ hover }">
          <v-img min-height="200px" max-height="350px" :src="p.data.image">
            <v-spacer></v-spacer>
            <div v-show="currentUser" class="ma-2 text-right">
              <v-btn icon dark @click="editarCard(p.id)"
                ><v-icon v-if="hover" class="pt-2"
                  >mdi-border-color</v-icon
                ></v-btn
              >
              <v-btn icon dark><v-icon v-if="hover">mdi-delete</v-icon></v-btn>
            </div>
          </v-img>
        </v-hover>

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
          <v-hover v-slot:default="{ hover }">
            <v-btn icon :color="hover ? 'red darken-1' : 'grey'">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
            <v-btn icon :color="hover ? 'teal darken-3' : 'grey'">
              <v-icon>mdi-tag</v-icon>
            </v-btn>
          </v-hover>
          <v-hover v-slot:default="{ hover }">
            <v-btn icon :color="hover ? 'grey darken-4' : 'grey'">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-hover>
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
    ...mapState(["plants", "dialog", "currentUser"]),
  },
  methods: {
    ...mapActions(["getPlants", "findCard", "showModal", "hideModal"]),
    editarCard(id) {
      this.showModal();
      this.findCard(id);
    },
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
