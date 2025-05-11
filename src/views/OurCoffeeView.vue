<template>
  <main>
    <div class="banner coffepage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <page-title-component :text="title" />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl" />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
              <br />
              <br />
              Afraid at highly months do things on at. Situation recommend objection do intention
              <br />
              so questions.
              <br />
              As greatly removed calling pleased improve an. Last ask him cold feel
              <br />
              met spot shy want. Children me laughing we prospect answered followed. At it went
              <br />
              is song that held help face.
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="row">
          <div class="col-lg-4 offset-2">
            <form action="#" class="shop__search">
              <label class="shop__search-label" for="filter">Looking for</label>
              <input
                @input="onSearch($event)"
                id="filter"
                type="text"
                placeholder="start typing here..."
                class="shop__search-input"
              />
            </form>
          </div>
          <div class="col-lg-4">
            <div class="shop__filter">
              <div class="shop__filter-label" @click="onSort('')">Or filter</div>
              <div class="shop__filter-group">
                <button class="shop__filter-btn" @click="onSort('Brazil')">Brazil</button>
                <button class="shop__filter-btn" @click="onSort('Kenya')">Kenya</button>
                <button class="shop__filter-btn" @click="onSort('Columbia')">Columbia</button>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <spiner-component v-if="getIsLoading" />
            <div class="shop__wrapper" v-else>
              <product-card-component
                v-for="card in coffee"
                :key="card.id"
                classItem="shop__item"
                :card="card"
                @onNavigate="navigate"
              >
                <template v-slot:country>
                  <div class="shop__item-country">{{ card.country }}</div>
                </template>
              </product-card-component>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";
import PageTitleComponent from "@/components/PageTitleComponent.vue";
import SpinerComponent from "@/components/SpinerComponent.vue";
import debounce from "debounce";

import { navigate } from "@/mixins/navigate";
import isLoading from "@/mixins/isLoading";

export default {
  components: { NavBarComponent, ProductCardComponent, PageTitleComponent, SpinerComponent },

  computed: {
    coffee() {
      return this.$store.getters["getCoffee"];
    },
    searchValue: {
      set(value) {
        this.$store.dispatch("setSearchValue", value);
      },
      get() {
        return this.$store.getters["getSearchValue"];
      },
    },
  },

  data() {
    return {
      title: "Our Coffee",
      name: "coffee",
    };
  },
  methods: {
    onSearch: debounce(function (event) {
      this.onSort(event.target.value);
    }, 500),
    async onSort(value) {
      await this.runSpinner(async () => {
        const response = await fetch(`http://localhost:3000/coffee?q=${value}`);
        const data = await response.json();
        this.$store.dispatch("setCoffeeData", data);
      });
    },
  },

  mixins: [navigate, isLoading],
  async mounted() {
    await this.runSpinner(async () => {
      const response = await fetch("http://localhost:3000/coffee");
      const data = await response.json();
      this.$store.dispatch("setCoffeeData", data);
    });
  },
};
</script>
