import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import VWave from "v-wave";

createApp(App)
  .use(store)
  .use(router)
  .use(VWave, { color: "white" })
  .mount("#app");
