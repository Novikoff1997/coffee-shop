<template>
  <main>
    <div class="banner goodspage-banner">
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
            <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl" />
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
          <div class="col-lg-10 offset-lg-1">
            <spiner-component v-if="getIsLoading" />
            <div class="shop__wrapper" v-else>
              <product-card-component
                v-for="card in goods"
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

import { navigate } from "@/mixins/navigate";
import isLoading from "@/mixins/isLoading";

export default {
  components: { NavBarComponent, ProductCardComponent, PageTitleComponent, SpinerComponent },
  computed: {
    goods() {
      return this.$store.getters["getGoods"];
    },
  },
  async mounted() {
    await this.runSpinner(async () => {
      const response = await fetch("http://localhost:3000/goods");
      const data = await response.json();
      this.$store.dispatch("setGoodsData", data);
    });
  },
  data() {
    return {
      title: "For your pleasure",
      name: "goods",
    };
  },
  mixins: [navigate, isLoading],
};
</script>
