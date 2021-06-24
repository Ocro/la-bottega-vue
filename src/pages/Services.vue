<template>
  <ServicesList></ServicesList>
</template>

<script>
import { defineComponent } from "vue";
import ServicesList from "../components/entity/services/ServicesList.vue";

export default defineComponent({
  name: "Services",
  components: { ServicesList },
});
</script>
