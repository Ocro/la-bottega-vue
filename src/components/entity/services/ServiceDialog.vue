<template>
  <Dialog
    :is-open="isOpen"
    @close="closeDialog"
    :title="title"
    class-dialog="max-w-xl"
  >
    <div class="mt-2" @keyup.enter="closeDialog(true)">
      <div class="flex">
        <input
          type="text"
          :value="modelValue.service"
          @input="
            $emit('update:modelValue', {
              ...modelValue,
              service: $event.target.value,
            })
          "
        />
        <input
          type="text"
          :value="modelValue.price"
          @input="
            $emit('update:modelValue', {
              ...modelValue,
              price: parseInt($event.target.value, 10),
            })
          "
        />
      </div>
      <div>
        <input
          id="archived"
          type="checkbox"
          :checked="modelValue.archived"
          @input="
            $emit('update:modelValue', {
              ...modelValue,
              archived: $event.target.checked,
            })
          "
        />
        <label for="archived">
          Archiver ce service. Il ne sera plus disponible pour les nouveaux
          rendez-vous, mais sera toujours visible dans les rendez-vous
          existants.
        </label>
      </div>
    </div>
    <div class="flex flex-nowrap justify-end">
      <button
        v-wave
        type="button"
        class="b-button-secondary"
        @click="closeDialog()"
      >
        Annuler
      </button>
      <button
        v-wave
        type="button"
        class="b-button-primary"
        @click="closeDialog(true)"
      >
        {{ btnSaveTitle }}
      </button>
    </div>
  </Dialog>
</template>
<script>
import Dialog from "../../utils/Dialog";

export default {
  name: "ServiceDialog",
  components: {
    Dialog,
  },
  props: {
    modelValue: {
      type: Object,
      default: null,
    },
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
    },
    "btn-save-title": {
      type: String,
      default: "Enregistrer",
    },
  },
  emits: ["update:modelValue", "close"],
  methods: {
    closeDialog(save = false) {
      this.$emit("close", save);
    },
  },
};
</script>

<style scoped></style>
