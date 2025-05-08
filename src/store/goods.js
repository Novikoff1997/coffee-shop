const goods = {
  state: {
    goods: [
      {
        id: 0,
        title: "Solimo goods Beans 2kg",
        country: "Brazil",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: 1,
        title: "Presto goods Beans 1kg",
        country: "Brazil",
        price: 15.99,
        img: "good-1.jpg",
      },
      {
        id: 2,
        title: "AROMISTICO goods 1kg",
        country: "Brazil",
        price: 6.99,
        img: "good-1.jpg",
      },
      {
        id: 3,
        title: "Solimo goods Beans 2kg",
        country: "Brazil",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: 4,
        title: "Solimo goods Beans 2kg",
        country: "Brazil",
        price: 10.73,
        img: "good-1.jpg",
      },
      {
        id: 5,
        title: "Solimo goods Beans 2kg",
        country: "Brazil",
        price: 10.73,
        img: "good-1.jpg",
      },
    ],
  },
  mutations: {
    setGoodsData(state, data) {
      state.goods = data;
    },
  },
  actions: {
    setGoodsData({ commit }, data) {
      commit("setGoodsData", data);
    },
  },
  getters: {
    getGoods(state) {
      return state.goods;
    },
    getGoodById(state) {
      return (id) => {
        return state.goods.find((card) => card.id === +id);
      };
    },
  },
};

export default goods;
