<template>
  <new-client-dialog
    :is-open="isNewClientDialogOpen"
    @close="closeNewClientDialog()"
  ></new-client-dialog>
  <service-dialog
    :is-open="isDialogServiceOpen"
    @close="closeServiceDialog"
    v-model="newService"
    title="Ajouter un service"
    btn-save-title="Ajouter"
  ></service-dialog>
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
      @click="openNewClientDialog()"
      class="
        b-text-base
        flex
        px-4
        h-11
        ml-2
        items-center
        rounded-full
        dark:hover:bg-gray-700 dark:hover:text-white
        transition-colors
        whitespace-nowrap
        hidden
        sm:flex
      "
    >
      <user-add-icon class="h-5 w-5 mr-1" />
      <span>Ajouter un client</span>
    </button>
    <menu-base
      as="div"
      class="relative inline-block text-left"
      v-slot="{ open }"
    >
      <div>
        <menu-button
          v-wave
          :class="[
            open ? 'dark:bg-gray-700' : 'dark:hover:bg-gray-700',
            'rounded-full ml-2 p-3 dark:hover:text-white b-text-base transition-colors',
          ]"
        >
          <dots-vertical-icon class="h-5 w-5" />
        </menu-button>
      </div>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-y-0 opacity-0"
        enter-to-class="transform scale-y-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-y-100 opacity-100"
        leave-to-class="transform scale-y-0 opacity-0"
      >
        <menu-items
          class="
            absolute
            right-3
            lg:left-0
            w-80
            mt-2
            origin-top-left
            dark:bg-gray-700
            rounded-md
            shadow-xl
          "
        >
          <div class="block sm:hidden">
            <menu-item v-slot="{ active }">
              <button
                v-wave
                @click="openNewClientDialog()"
                :class="[
                  active ? 'bg-gray-600 text-white' : 'b-text-base',
                  'group flex rounded-t-md items-center w-full p-3 transition-colors',
                ]"
              >
                <user-add-icon
                  :active="active"
                  class="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Ajouter un client
              </button>
            </menu-item>
          </div>
          <div class="border-t sm:border-t-0 border-gray-400">
            <menu-item v-slot="{ active }">
              <button
                v-wave
                @click="openServiceDialog"
                :class="[
                  active ? 'bg-gray-600 text-white' : 'b-text-base',
                  'group flex rounded-t-none sm:rounded-t-md items-center w-full p-3 transition-colors',
                ]"
              >
                <scissors-icon
                  :active="active"
                  class="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Ajouter un service
              </button>
            </menu-item>
          </div>
          <div class="border-t border-gray-400">
            <menu-item v-slot="{ active }">
              <button
                v-wave
                :class="[
                  active ? 'bg-gray-600 text-white' : 'b-text-base',
                  'group flex rounded-b-md items-center w-full p-3 transition-colors',
                ]"
              >
                <database-icon
                  :active="active"
                  class="w-5 h-5 mr-2"
                  aria-hidden="true"
                />
                Télécharger la base de données
              </button>
            </menu-item>
          </div>
        </menu-items>
      </transition>
    </menu-base>
  </nav>
</template>

<script lang="ts">
// TODO rounded-full pour la search bar or not?
// TODO ajouter un bouton "effacer" pour vider facilement le champ de recherche quand il y a du texte.
// TODO recherche par numéro de téléphone
import { defineComponent } from "vue";
import {
  SearchIcon,
  UserAddIcon,
  DotsVerticalIcon,
  ScissorsIcon,
  DatabaseIcon,
  // @ts-ignore
} from "@heroicons/vue/solid";
import {
  Menu as MenuBase,
  MenuButton,
  MenuItems,
  MenuItem,
} from "@headlessui/vue";
import NewClientDialog from "@/components/entity/clients/NewClientDialog.vue";
import ServiceDialog from "@/components/entity/services/ServiceDialog.vue";
import Service from "@/models/service";

export default defineComponent({
  name: "Header",
  components: {
    SearchIcon,
    UserAddIcon,
    DotsVerticalIcon,
    ScissorsIcon,
    DatabaseIcon,
    MenuBase,
    MenuButton,
    MenuItems,
    MenuItem,
    NewClientDialog,
    ServiceDialog,
  },
  methods: {
    openNewClientDialog(): void {
      this.isNewClientDialogOpen = true;
    },
    closeNewClientDialog(save: boolean = false): void {
      console.log(save);
      this.isNewClientDialogOpen = false;
    },
    openServiceDialog(): void {
      this.newService = {
        id: null,
        service: "",
        price: 0,
        archived: false,
      };
      this.isDialogServiceOpen = true;
    },
    closeServiceDialog(save: boolean = false): void {
      if (save) {
        this.$store.dispatch("services/createService", this.newService);
      }
      this.isDialogServiceOpen = false;
    },
  },
  data() {
    return {
      isNewClientDialogOpen: false,
      isDialogServiceOpen: false,
      newService: null as Service | null,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
