<template>
  <div :class="classItem">
    <img :src="require(`@/assets/img/${img}`)" alt="coffee" />
    <div class="best__item-title">{{ title }}</div>
    <slot name="country"></slot>
    <div class="best__item-price">{{ price }}$</div>
  </div>
</template>

<script>
import { String } from "core-js";

export default {
  props: {
    title: {
      type: String,
      reqiured: true,
    },
    price: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
    },
    classItem: {
      type: String,
      required: false,
    },
  },
};
</script>
