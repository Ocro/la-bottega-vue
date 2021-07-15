<template>
  <router-link
    class="
      b-text-base
      dark:hover:text-white
      transition-colors
      text-left
      py-2
      flex flex-nowrap
      hover:bg-gray-700
    "
    v-wave
    :to="{ name: bRouteName }"
  >
    <span class="w-6 h-6"><slot></slot></span>
    <span class="pl-2">{{ title }}</span>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuButton",
  props: {
    title: {
      type: String,
      required: true,
    },
    "b-route-name": {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped></style>
