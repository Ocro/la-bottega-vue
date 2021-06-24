<template>
  <div class="fixed top-0 pt-20 h-screen w-52 flex flex-col">
    <MenuCategory>Annuaires</MenuCategory>
    <MenuButton title="Clients" b-route-name="Clients">
      <UserGroupIcon></UserGroupIcon>
    </MenuButton>
    <MenuButton title="Services" b-route-name="Services"
      ><ScissorsIcon></ScissorsIcon
    ></MenuButton>
    <MenuCategory>Bulletins</MenuCategory>
    <MenuButton title="Par date"><CalendarIcon></CalendarIcon></MenuButton>
    <MenuButton title="Par client"
      ><UserCircleIcon></UserCircleIcon
    ></MenuButton>
    <!-- TODO CHANGER ICON -->
    <MenuButton title="Par service"><ScissorsIcon></ScissorsIcon></MenuButton>
    <MenuCategory>Utilitaires</MenuCategory>
    <MenuButton title="Anciens clients"
      ><EmojiSadIcon></EmojiSadIcon
    ></MenuButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuButton from "./MenuButton.vue";
import MenuCategory from "./MenuCategory.vue";
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
