<template>
  <NewClientDialog
    :is-open="isNewClientDialogOpen"
    @close="isNewClientDialogOpen = false"
  ></NewClientDialog>
  <ServiceDialog
    :is-open="isDialogServiceOpen"
    @close="closeServiceDialog"
    v-model="newService"
    title="Ajouter un service"
    btn-save-title="Ajouter"
  ></ServiceDialog>
  <nav
    class="fixed dark:bg-gray-800 py-2 flex items-center top-0 inset-x-0 z-20"
  >
    <img
      src="../assets/logo-bottega-simple.svg"
      alt="logo la-bottega"
      class="w-32 px-4"
    />
    <div class="w-96">
      <div
        class="
          relative
          shadow-sm
          rounded-full
          dark:hover:text-white
          b-text-base
          transition-colors
        "
        v-wave
      >
        <input
          type="text"
          name="customer-search"
          id="customer-search"
          class="
            block
            dark:text-white
            w-full
            pl-6
            rounded-full
            dark:bg-gray-700
            dark:focus:ring-transparent
            dark:border-gray-700
            dark:focus:border-gray-500
            dark:hover:border-gray-500
            dark:hover:bg-gray-600
            transition-colors
          "
        />
        <div
          class="
            absolute
            inset-y-0
            right-0
            pr-6
            flex
            items-center
            pointer-events-none
          "
        >
          <SearchIcon class="h-5 w-5" />
        </div>
      </div>
    </div>
    <button
      v-wave
      @click="isNewClientDialogOpen = true"
      class="
        b-text-base
        flex
        px-4
        h-11
        ml-2
        flex
        items-center
        rounded-full
        dark:hover:bg-gray-700 dark:hover:text-white
        transition-colors
      "
    >
      <UserAddIcon class="h-5 w-5 mr-1" />
      <span>Ajouter un client</span>
    </button>
    <Menu as="div" class="relative inline-block text-left" v-slot="{ open }">
      <div>
        <MenuButton
          v-wave
          :class="[
            open ? 'dark:bg-gray-700' : 'dark:hover:bg-gray-700',
            'rounded-full ml-2 p-3 dark:hover:text-white b-text-base transition-colors',
          ]"
        >
          <DotsVerticalIcon class="h-5 w-5" />
        </MenuButton>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-y-0 opacity-0"
        enter-to-class="transform scale-y-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-y-100 opacity-100"
        leave-to-class="transform scale-y-0 opacity-0"
      >
        <MenuItems
          class="
            absolute
            left-0
            w-80
            mt-2
            origin-top-left
            dark:bg-gray-700
            divide-y divide-gray-400
            rounded-md
            shadow-xl
          "
        >
          <div>
            <MenuItem v-slot="{ active }">
              <button
                v-wave
                @click="openServiceDialog"
                :class="[
                  active ? 'bg-gray-600 text-white' : 'b-text-base',
                  'group flex rounded-t-md items-center w-full p-3 transition-colors',
                ]"
              >
                <ScissorsIcon
                  :active="active"
                  class="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Ajouter un service
              </button>
            </MenuItem>
          </div>
          <div>
            <MenuItem v-slot="{ active }">
              <button
                v-wave
                :class="[
                  active ? 'bg-gray-600 text-white' : 'b-text-base',
                  'group flex rounded-b-md items-center w-full p-3 transition-colors',
                ]"
              >
                <DatabaseIcon
                  :active="active"
                  class="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Télécharger la base de données
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </nav>
</template>

<script lang="ts">
// TODO rounded-full pour la search bar or not?
// TODO ajouter un bouton "effacer" pour vider facilement le champ de recherche quand il y a du texte.
// TODO Voir pour un gris plus... noir et moins bleu.
// TODO recherche pas numéro de téléphone
import { defineComponent } from "vue";
import {
  SearchIcon,
  UserAddIcon,
  DotsVerticalIcon,
  ScissorsIcon,
  DatabaseIcon,
  // @ts-ignore
} from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/vue";
import NewClientDialog from "./entity/clients/NewClientDialog.vue";
import ServiceDialog from "./entity/services/ServiceDialog.vue";
import Service from "../models/service";

export default defineComponent({
  name: "Header",
  components: {
    SearchIcon,
    UserAddIcon,
    DotsVerticalIcon,
    ScissorsIcon,
    DatabaseIcon,
    Menu,
    MenuButton,
    MenuItems,
    MenuItem,
    NewClientDialog,
    ServiceDialog,
  },
  methods: {
    openServiceDialog(): void {
      this.newService = {
        id: null,
        service: "",
        price: 0,
        archived: false,
      };
      this.isDialogServiceOpen = true;
    },
    closeServiceDialog(save: boolean) {
      if (save) {
        this.$store.dispatch("services/createService", this.newService);
      }
      this.isDialogServiceOpen = false;
    },
  },
  data() {
    return {
      isNewClientDialogOpen: false as boolean,
      isDialogServiceOpen: false as boolean,
      newService: null as Service | null,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
