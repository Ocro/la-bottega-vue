<template>
  <ClientsList></ClientsList>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ClientsList from "../components/entity/clients/ClientsList.vue";

export default defineComponent({
  name: "Clients",
  components: { ClientsList },
});
</script>
