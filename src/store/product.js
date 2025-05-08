const product = {
  state: {
    product: {},
  },

  mutations: {
    setProductData(state, data) {
      state.product = data;
    },
  },

  actions: {
    setProductData({ commit }, data) {
      commit("setProductData", data);
    },
  },

  getters: {
    getProductData(state) {
      return state.product;
    },
  },
};

export default product;
