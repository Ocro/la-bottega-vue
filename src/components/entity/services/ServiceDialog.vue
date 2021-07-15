<template>
  <dialog-wrapper
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
        <!-- TODO emiter un Service -->
        <input
          type="text"
          :value="modelValue.price"
          @input="
            $emit('update:modelValue', {
              ...modelValue,
              price: $event.target.value,
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
  </dialog-wrapper>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import DialogWrapper from "@/components/utils/Dialog.vue";
import Service from "@/models/service";

export default defineComponent({
  name: "ServiceDialog",
  components: {
    DialogWrapper,
  },
  props: {
    modelValue: {
      type: Object as PropType<Service>,
      required: true,
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
  emits: {
    // eslint-disable-next-line no-unused-vars
    "update:modelValue"(payload: Service) {
      // TODO Fonctionne pas, vérifier pourquoi.
      return !isNaN(payload.price);
    },
    close: null,
  },
  methods: {
    closeDialog(save = false): void {
      this.$emit("close", save);
    },
  },
});
</script>
