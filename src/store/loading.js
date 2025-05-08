const loading = {
  state: {
    isLoading: false,
  },

  mutations: {
    isLoading(state, data) {
      state.isLoading = data;
    },
  },
  actions: {
    isLoading({ commit }, data) {
      commit("isLoading", data);
    },
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading;
    },
  },
};

export default loading;
