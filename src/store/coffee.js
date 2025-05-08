const coffee = {
  state: {
    coffee: [
      {
        id: 0,
        title: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
        img: "coffee-1.jpg",
      },
      {
        id: 1,
        title: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
        img: "coffee-2.jpg",
      },
      {
        id: 2,
        title: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
        img: "coffee-3.jpg",
      },
      {
        id: 3,
        title: "Black Rifle Coffee",
        country: "Kenya",
        price: 10.73,
        img: "coffee-1.jpg",
      },
      {
        id: 4,
        title: "Presto Coffee Beans 1 kg",
        country: "Columbia",
        price: 15.99,
        img: "coffee-2.jpg",
      },
      {
        id: 5,
        title: "Organic Coffee One Cup",
        country: "Columbia",
        price: 24.99,
        img: "coffee-3.jpg",
      },
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
  },
  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    getProductById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
  },
};

export default coffee;
