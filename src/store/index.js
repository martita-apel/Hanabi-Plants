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
    modal: false,
    loading: false,
  },
  mutations: {
    SHOW_MODAL(state) {
      state.modal = true;
    },
    HIDE_MODAL(state) {
      state.modal = false;
    },
    LOADING(state) {
      state.loading = true;
    },
    STOP_LOADING(state) {
      state.loading = false;
    },
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
    SET_PLANT(state, plant) {
      state.currentPlant = plant;
    },
    RESET_FORM(state) {
      state.currentPlant.id = null;
      state.currentPlant.data.name = "";
      state.currentPlant.data.category = "";
      state.currentPlant.data.description = "";
      state.currentPlant.data.image = "";
      state.currentPlant.data.price = 0;
      state.currentPlant.data.stock = 0;
    },
  },
  actions: {
    showModal({ commit }) {
      commit("SHOW_MODAL");
    },
    hideModal({ commit }) {
      commit("HIDE_MODAL");
    },
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
    resetForm({ commit }) {
      commit("RESET_FORM");
    },
    getPlants({ commit, dispatch }) {
      commit("LOADING");
      axios
        .get(
          "https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plants"
        )
        .then((response) => {
          commit("GET_PLANTS", response.data);
          dispatch("resetForm");
        })
        .finally(() => {
          commit("STOP_LOADING");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    addPlant({ dispatch, commit, state }) {
      commit("LOADING");
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
    findCard({ commit }, id) {
      axios
        .get(
          `https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plant/${id}`
        )
        .then((response) => {
          commit("SET_PLANT", response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    updatePlant({ state, dispatch, commit }, id) {
      commit("LOADING");
      const planta = state.currentPlant.data;
      axios
        .put(
          `https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plant/${id}`,
          planta
        )
        .then(() => {
          dispatch("getPlants");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    deleteCard({ dispatch, commit }, id) {
      commit("LOADING");
      axios
        .delete(
          `https://us-central1-hanabi-plantas.cloudfunctions.net/plants/plant/${id}`
        )
        .then(() => {
          dispatch("getPlants");
        })
        .catch(function(error) {
          console.log(error);
        });
    },
  },
});
