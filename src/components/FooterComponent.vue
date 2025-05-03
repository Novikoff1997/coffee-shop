<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <ul class="footer d-flex flex-wrap">
            <nav-link-component :link="links.footer.link" classItem="footer__item">
              <img :src="require(`@/assets/logo/${links.footer.icon}`)" :alt="links.footer.icon" />
            </nav-link-component>

            <nav-link-component
              v-for="link in links.other"
              :key="link.id"
              classItem="footer__item"
              :link="link.link"
              :text="link.text"
            />
          </ul>
        </div>
      </div>
      <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
    </div>
  </footer>
</template>


<script>
import links from "@/store/links";
import NavLinkComponent from "./NavLinkComponent.vue";

export default {
  components: { NavLinkComponent },

  computed: {
    links() {
      return this.$store.getters["getFooterLinks"];
    },
  },
};
</script>
