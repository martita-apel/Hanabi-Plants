import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

function basePlant() {
  return {
    id: null,
    data: {
      id: "",
      name: "",
      price: 0,
      stock: 0,
    },
  };
}

export default new Vuex.Store({
  state: {
    currentUser: null,
    plants: [],
    currentPlant: basePlant(),
    showModal: false,
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
    GET_PLANTS(state, plants) {
      state.plants = plants;
    },
    UPDATE_NAME(state, name) {
      state.currentPlant.data.name = name;
    },
    UPDATE_CATEGORY(state, category) {
      state.currentPlant.data.category = category;
    },
    UPDATE_DESCRIPTION(state, description) {
      state.currentPlant.data.description = description;
    },
    UPDATE_IMAGE(state, image) {
      state.currentPlant.data.image = image;
    },
    UPDATE_PRICE(state, price) {
      state.currentPlant.data.price = price;
    },
    UPDATE_STOCK(state, stock) {
      state.currentPlant.data.stock = stock;
    },
  },
  actions: {
    updateUser({ commit }, user) {
      return new Promise((resolve, reject) => {
        try {
          commit("UPDATE_CURR_USER", user);
          resolve(user);
        } catch (e) {
          reject(e);
        }
      });
    },
    updateName({ commit }, name) {
      commit("UPDATE_NAME", name);
    },
    updateCategory({ commit }, category) {
      commit("UPDATE_CATEGORY", category);
    },
    updateDescription({ commit }, description) {
      commit("UPDATE_DESCRIPTION", description);
    },
    updateImage({ commit }, image) {
      commit("UPDATE_IMAGE", image);
    },
    updatePrice({ commit }, price) {
      commit("UPDATE_PRICE", price);
    },
    updateStock({ commit }, stock) {
      commit("UPDATE_STOCK", stock);
    },
    getPlants({ commit }) {
      /*       commit("LOADING");
       */ axios
        .get(
          "https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plants"
        )
        .then((response) => {
          commit("GET_PLANTS", response.data);
          /*           commit("RESET_FORM");
           */
        })
        .finally(() => {
          /*           commit("STOP_LOADING");
           */
        });
    },
    addPlant({ dispatch, state }) {
      const planta = state.currentPlant.data;
      axios
        .post(
          "https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plant",
          planta,
          { headers: { "Content-type": "application/json" } }
        )
        .then((response) => {
          console.log(response.data);
          dispatch("getPlants");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});
