<template>
  <header>
    <ul class="header d-flex justify-content-center justify-content-md-start flex-wrap">
      <nav-link-component :link="links.header.link" classItem="header__item">
        <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon" />
      </nav-link-component>

      <nav-link-component
        v-for="link in links.other"
        :key="link.id"
        classItem="header__item"
        :link="link.link"
        :text="link.text"
      />
    </ul>
  </header>
</template>

<script>
import store from "@/store";
import NavLinkComponent from "./NavLinkComponent.vue";

export default {
  components: { NavLinkComponent },
  computed: {
    links() {
      return this.$store.getters["getHeaderLinks"];
    },
  },
};
</script>
