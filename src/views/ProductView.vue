<template>
  <main>
    <div class="banner" :class="pageName === 'coffee' ? 'coffepage-banner' : 'goodspage-banner'">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>
        <page-title-component v-if="product.name" :text="product.name" />
      </div>
    </div>

    <section class="shop" v-if="product">
      <div class="container">
        <spiner-component v-if="getIsLoading" />

        <div class="row" v-else>
          <div class="col-lg-5 offset-0 offset-lg-1">
            <img class="shop__girl" :src="product.image" alt="coffee_item" />
          </div>
          <div class="col-lg-4">
            <div class="title">About it</div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
            <div v-if="product.country" class="shop__point">
              <span>Country:</span>
              {{ product.country }}
            </div>
            <div v-if="product.description" class="shop__point">
              <span>Description:</span>
              {{ product.description }}
            </div>
            <div class="shop__point">
              <span>Price:&nbsp</span>
              <span class="shop__point-price">{{ product.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import NavBarComponent from "@/components/NavBarComponent.vue";
import PageTitleComponent from "@/components/PageTitleComponent.vue";
import SpinerComponent from "@/components/SpinerComponent.vue";
import isLoading from "@/mixins/isLoading";

export default {
  components: { NavBarComponent, PageTitleComponent, SpinerComponent },
  data() {
    return {
      title: "Our Coffee",
    };
  },

  async mounted() {
    await this.runSpinner(async () => {
      const response = await fetch(`http://localhost:3000/${this.$route.name}/${this.$route.params.id}`);
      const data = await response.json();
      this.$store.dispatch("setProductData", data);
    });
  },

  computed: {
    product() {
      return this.$store.getters["getProductData"];
    },
    pageName() {
      return this.$route.name;
    },
  },
  mixins: [isLoading],
};
</script>
