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
  getters: {
    getGoods(state) {
      return state.goods;
    },
  },
};

export default goods;
