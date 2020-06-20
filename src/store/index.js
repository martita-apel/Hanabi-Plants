import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: null,
    plants: [],
    plant: {
      id: null,
      data: {
        name: "",
        category: "",
        description: "",
        image: "",
        price: 0,
        stock: 0,
      },
    },
    showModal: false,
  },
  mutations: {
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
    GET_PLANTS(state, plants) {
      state.plants = plants;
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
  },
});
