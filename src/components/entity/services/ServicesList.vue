<template>
  <ServiceDialog
    :is-open="isDialogServiceOpen"
    @close="closeDialog"
    v-model="selectedService"
    title="Modifier un service"
    btn-save-title="Modifier"
  ></ServiceDialog>
  <ListLoader v-if="isServiceLoaderDisplayed" />
  <div
    v-for="service in servicesFiltered"
    :key="service.id"
    class="
      flex
      b-text-base
      max-w-2xl
      py-2
      px-4
      dark:hover:bg-gray-700
      cursor-pointer
    "
    v-wave
    @click="openDialog(service)"
  >
    <div class="flex-grow font-bold">{{ service.service }}</div>
    <div class="flex-none">
      {{ service.price }} {{ $store.state.globals.CURRENCY }}
    </div>
    <div class="flex-none b-text-base ml-10 w-6 h-6">
      <ArchiveIcon v-if="service.archived"></ArchiveIcon>
    </div>
  </div>
  <button @click="moreResults">Plus de résultats</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import _slice from "lodash/slice";
import _values from "lodash/values";
import _sortBy from "lodash/sortBy";
import ListLoader from "../../utils/ListLoader.vue";
import ServiceDialog from "./ServiceDialog.vue";
// @ts-ignore
import { ArchiveIcon } from "@heroicons/vue/solid";
import Service from "../../../models/service";

const INITIAL_DISPLAY_RESULTS: number = 10;

export default defineComponent({
  name: "ServicesList",
  components: { ListLoader, ServiceDialog, ArchiveIcon },
  computed: {
    servicesFiltered(): Array<Service> {
      return _slice(
        _sortBy(
          _values(this.$store.state.services.services),
          (o) => o.service?.toLowerCase() || ""
        ),
        0,
        this.nbDisplayResults
      );
    },
  },
  methods: {
    moreResults(): void {
      this.nbDisplayResults += INITIAL_DISPLAY_RESULTS;
    },
    openDialog(service: Service): void {
      this.selectedService = service;
      this.isDialogServiceOpen = true;
    },
    closeDialog(save: boolean) {
      if (save) {
        // TODO gérer le retour de l'appel
        this.$store.dispatch("services/updateService", this.selectedService);
      }
      this.isDialogServiceOpen = false;
    },
  },
  data() {
    return {
      nbDisplayResults: INITIAL_DISPLAY_RESULTS as number,
      isServiceLoaderDisplayed: false as boolean,
      isDialogServiceOpen: false as boolean,
      selectedService: null as Service | null,
    };
  },
  mounted() {
    // Affiche l'écran de chargement qu'après un certain temps.
    let timeout: ReturnType<typeof setTimeout> = setTimeout(
      () => (this.isServiceLoaderDisplayed = true),
      500
    );

    // TODO Ne pas récupérer tous les services, faire de la pagination côté serveur.
    this.$store.dispatch("services/getServices").then(() => {
      clearTimeout(timeout);
      this.isServiceLoaderDisplayed = false;
    });
  },
});
</script>
