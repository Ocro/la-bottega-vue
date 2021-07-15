<template>
  <TransitionRoot :show="isOpen">
    <HeadlessuiDialog as="div" @close="closeDialog">
      <div class="fixed inset-0 z-20 overflow-y-auto">
        <div class="min-h-screen px-4 text-center">
          <!-- FIXME la transition passe de 20 à 100 d'un coup, laissant un fond noir. -->
          <!--          <TransitionChild-->
          <!--            as="template"-->
          <!--            enter="duration-300 ease-out"-->
          <!--            enter-from="opacity-0"-->
          <!--            enter-to="opacity-20"-->
          <!--            leave="duration-200 ease-in"-->
          <!--            leave-from="opacity-20"-->
          <!--            leave-to="opacity-0"-->
          <!--          >-->
          <DialogOverlay class="fixed inset-0 bg-black opacity-20" />
          <!--          </TransitionChild>-->

          <span class="inline-block h-screen align-middle" aria-hidden="true">
            &#8203;
          </span>

          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <div
              :class="classDialog"
              class="
                inline-block
                w-full
                p-6
                my-8
                overflow-hidden
                text-left
                align-middle
                transition-all
                transform
                bg-gray-700
                shadow-xl
                rounded-2xl
              "
            >
              <DialogTitle
                as="h3"
                class="text-lg font-medium leading-6 text-gray-900 b-text-base"
              >
                {{ title }}
              </DialogTitle>
              <slot></slot>
            </div>
          </TransitionChild>
        </div>
      </div>
    </HeadlessuiDialog>
  </TransitionRoot>
</template>
<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog as HeadlessuiDialog,
  DialogOverlay,
  DialogTitle,
} from "@headlessui/vue";

export default {
  name: "Dialog",
  components: {
    TransitionRoot,
    TransitionChild,
    HeadlessuiDialog,
    DialogOverlay,
    DialogTitle,
  },
  props: ["isOpen", "classDialog", "title"],
  methods: {
    closeDialog() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped></style>
