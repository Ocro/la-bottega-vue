<template>
  <div class="fixed top-0 pt-20 h-screen w-52 flex flex-col">
    <menu-category>Annuaires</menu-category>
    <menu-button title="Clients" b-route-name="Clients">
      <user-group-icon></user-group-icon>
    </menu-button>
    <menu-button title="Services" b-route-name="Services"
      ><scissors-icon></scissors-icon
    ></menu-button>
    <menu-category>Bulletins</menu-category>
    <menu-button title="Par date"><CalendarIcon></CalendarIcon></menu-button>
    <menu-button title="Par client"
      ><UserCircleIcon></UserCircleIcon
    ></menu-button>
    <!-- TODO CHANGER ICON -->
    <menu-button title="Par service"><ScissorsIcon></ScissorsIcon></menu-button>
    <menu-category>Utilitaires</menu-category>
    <menu-button title="Anciens clients"
      ><emoji-sad-icon></emoji-sad-icon
    ></menu-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuButton from "@/components/controls/menu/MenuButton.vue";
import MenuCategory from "@/components/controls/menu/MenuCategory.vue";
import {
  UserGroupIcon,
  ScissorsIcon,
  CalendarIcon,
  UserCircleIcon,
  EmojiSadIcon,
} from "heroicons-vue3/solid";

export default defineComponent({
  name: "MainMenu",
  components: {
    MenuButton,
    UserGroupIcon,
    ScissorsIcon,
    CalendarIcon,
    UserCircleIcon,
    EmojiSadIcon,
    MenuCategory,
  },
});
</script>

<style scoped></style>
