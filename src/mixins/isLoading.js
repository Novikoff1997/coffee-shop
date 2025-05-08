export default {
  computed: {
    getIsLoading() {
      return this.$store.getters["getIsLoading"];
    },
  },
  methods: {
    async runSpinner(callback) {
      this.$store.dispatch("isLoading", true);
      try {
        return await callback();
      } finally {
        this.$store.dispatch("isLoading", false);
      }
    },
  },
};
