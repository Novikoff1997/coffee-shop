import Vue from "vue";
import VueRouter from "vue-router";

import HeroView from "@/views/HeroView.vue";
import OurCoffeeView from "@/views/OurCoffeeView.vue";
import ForYourPleasure from "@/views/ForYourPleasure.vue";
import CountactUs from "@/views/CountactUs.vue";
import ThanksView from "@/views/ThanksView.vue";
import ProductView from "@/views/ProductView.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: HeroView },
  { path: "/our-coffee", component: OurCoffeeView },
  { path: "/for-your-pleasure", component: ForYourPleasure },
  { path: "/contact-us", component: CountactUs },
  { path: "/thanks", component: ThanksView },
  { name: "coffee", path: "/our-coffee/:id", component: ProductView },
  { name: "goods", path: "/for-your-pleasure/:id", component: ProductView },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
