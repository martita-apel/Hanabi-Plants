export default {
  state: {
    currentUser: undefined,
  },
  mutations: {
    // User
    UPDATE_CURR_USER(state, user) {
      state.currentUser = user;
    },
  },
  actions: {
    // User
    updateUser({ commit }, user) {
      commit("UPDATE_CURR_USER", user);
    },
  },
  getters: {
    // User
    isLoggedIn: (state) => !!state.currentUser,
    currentUser: (state) => state.currentUser,
  },
};
