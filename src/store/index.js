import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    showModal: false,
  },
  mutations: {
    SHOW_MODAL(state) {
      state.showModal = false;
    },
    HIDE_MODAL(state) {
      state.showModal = false;
    },
  },
  actions: {
    showModal({ commit }) {
      commit("SHOW_MODAL");
    },
    hideModal({ commit }) {
      commit("HIDE_MODAL");
    },
  },
});
