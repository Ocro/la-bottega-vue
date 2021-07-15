<template>
  <ListLoader v-if="isClientLoaderDisplayed" />
  <div
    v-for="client in clientsFiltered"
    :key="client.id"
    class="
      flex
      b-text-base
      max-w-6xl
      py-2
      px-4
      dark:hover:bg-gray-700
      cursor-pointer
    "
    v-wave
  >
    <div class="flex-1 font-bold">
      {{ [client.firstname, client.name].join(" ").trim() }}
    </div>
    <div class="flex-1">{{ client.phone }}</div>
    <div class="flex-2">{{ addresse(client) }}</div>
  </div>
  <button @click="moreResults">Plus de résultats</button>
</template>

<script>
import _slice from "lodash/slice";
import _trim from "lodash/trim";
import ListLoader from "../../utils/ListLoader.vue";

const INITIAL_DISPLAY_RESULTS = 10;

export default {
  name: "ClientsList",
  components: { ListLoader },
  computed: {
    clientsFiltered() {
      return _slice(
        this.$store.state.clients.clients,
        0,
        this.nbDisplayResults
      );
    },
  },
  methods: {
    moreResults() {
      this.nbDisplayResults += INITIAL_DISPLAY_RESULTS;
    },
    addresse(client) {
      return _trim(
        [client.address, [client.npa, client.city].join(" ").trim()].join(
          ", "
        ),
        ", "
      );
    },
  },
  data() {
    return {
      nbDisplayResults: INITIAL_DISPLAY_RESULTS,
      isClientLoaderDisplayed: false,
    };
  },
  mounted() {
    // Affiche l'écran de chargement qu'après un certain temps.
    let timeout = setTimeout(() => (this.isClientLoaderDisplayed = true), 500);

    // TODO Ne pas récupérer tous les clients, faire de la pagination côté serveur.
    this.$store.dispatch("clients/getClients").then(() => {
      clearTimeout(timeout);
      this.isClientLoaderDisplayed = false;
    });
  },
};
</script>

<style scoped></style>
