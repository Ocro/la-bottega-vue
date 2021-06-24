<template>
  <div>
    <div id="client-loader" v-for="n in 10" :key="n" class="p-4 max-w-3xl mt-2">
      <!-- TODO Faire que ça ait la même apparence que les lignes une fois chargées. -->
      <div class="animate-pulse space-x-4 flex">
        <div class="h-4 dark:bg-gray-500 rounded flex-4"></div>
        <div class="h-4 dark:bg-gray-500 rounded flex-1"></div>
        <div class="h-4 dark:bg-gray-500 rounded flex-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ListLoader",
});
</script>
