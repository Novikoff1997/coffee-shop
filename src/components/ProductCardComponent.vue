<template>
  <div :class="classItem" @click="onEmmit(card.id)">
    <img :src="card.image" :alt="card.image" />
    <div class="best__item-title">{{ card.name }}</div>
    <slot name="country"></slot>
    <div class="best__item-price">{{ card.price }}</div>
  </div>
</template>

<script>
import { String } from "core-js";

export default {
  props: {
    classItem: {
      type: String,
      required: false,
    },
    card: {
      type: Object,
      required: true,
    },
  },
  methods: {
    onEmmit(id) {
      this.$emit("onNavigate", id);
    },
  },
};
</script>
