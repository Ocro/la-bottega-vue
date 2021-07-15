<template>
  <dialog-wrapper
    title="Ajouter un nouveau client"
    :is-open="isOpen"
    @close="closeDialog"
    class-dialog="max-w-xl"
  >
    <div class="mt-2">
      <div class="flex">
        <input type="text" v-model="client.name" placeholder="name" />
        <input type="text" v-model="client.firstname" placeholder="firstname" />
      </div>
      <input type="text" v-model="client.address" placeholder="address" />
      <div class="flex">
        <input
          type="text"
          class="max-w-sm"
          v-model="client.npa"
          placeholder="npa"
        />
        <input type="text" v-model="client.city" placeholder="city" />
      </div>
      <input type="text" v-model="client.phone" placeholder="phone" />
    </div>

    <div class="flex flex-nowrap justify-end">
      <button
        v-wave
        type="button"
        class="b-button-secondary"
        @click="closeDialog"
      >
        Annuler
      </button>
      <button
        v-wave
        type="button"
        class="b-button-primary"
        @click="closeDialog"
      >
        Ajouter
      </button>
    </div>
  </dialog-wrapper>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import DialogWrapper from "@/components/utils/Dialog.vue";
import Client from "@/models/client";

export default defineComponent({
  name: "NewClientDialog",
  components: {
    DialogWrapper,
  },
  data() {
    return {
      client: {
        id: null,
        name: "",
        firstname: "",
        address: "",
        npa: null,
        city: "",
        phone: "",
      } as Client,
    };
  },
  props: {
    "is-open": {
      type: Boolean,
      default: true,
    },
  },
  emits: { close: null },
  methods: {
    closeDialog(): void {
      this.$emit("close");
    },
  },
});
</script>
