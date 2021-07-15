<template>
  <Dialog
    title="Ajouter un nouveau client"
    :is-open="isOpen"
    @close="closeDialog"
    class-dialog="max-w-xl"
  >
    <div class="mt-2">
      <div class="flex">
        <input type="text" v-model="name" placeholder="name" />
        <input type="text" v-model="firstname" placeholder="firstname" />
      </div>
      <input type="text" v-model="address" placeholder="address" />
      <div class="flex">
        <input type="text" class="max-w-sm" v-model="npa" placeholder="npa" />
        <input type="text" v-model="city" placeholder="city" />
      </div>
      <input type="text" v-model="phone" placeholder="phone" />
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
  </Dialog>
</template>
<script>
import Dialog from "../../utils/Dialog.vue";

export default {
  name: "NewClientDialog",
  components: {
    Dialog,
  },
  data() {
    return {
      name: "",
      firstname: "",
      address: "",
      npa: "",
      city: "",
      phone: "",
    };
  },
  props: ["isOpen"],
  emits: ["close"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
