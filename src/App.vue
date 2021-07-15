<template>
  <Header />
  <MainMenu id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </MainMenu>
  <div class="mt-24 ml-60">
    <router-view />
  </div>
</template>

<script>
// TODO faire un lazy loading et n'afficher qu'un certains nombre de client
// TODO éditer le fichier public/robots pour accepter aucun robot.
// TODO faire un animate Pulse https://tailwindcss.com/docs/animation en lazy loading
import Header from "./components/Header";
import MainMenu from "./components/controls/menu/MainMenu";

export default {
  name: "App",
  components: {
    Header,
    MainMenu,
  },
};
</script>

<style>
.b-text-base {
  @apply dark:text-gray-400;
}

.b-button {
  @apply justify-center
    px-4
    py-2
    mx-1
    my-4
    text-sm
    font-medium
    text-gray-100
    border border-transparent
    rounded-md
    focus:outline-none
    focus:ring-2
    focus:ring-offset-2
    focus:ring-blue-500;
}

.b-button-primary {
  @apply b-button dark:bg-blue-800 dark:hover:bg-blue-500;
}

.b-button-secondary {
  @apply b-button dark:bg-gray-800 dark:hover:bg-gray-500;
}

.b-button-destruct {
  @apply b-button dark:bg-red-800 dark:hover:bg-red-500;
}

.b-button-construct {
  @apply b-button dark:bg-green-800 dark:hover:bg-green-500;
}
</style>
