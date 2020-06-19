import Vue from "vue";
import Vuex from "vuex";

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
    HIDE_MODAL(state) {
      state.showModal = false;
    },
  },
  actions: {
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
  },
});
