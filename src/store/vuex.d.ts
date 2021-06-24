import { ComponentCustomProperties } from "vue";
import { Store } from "vuex";
import Service from "../models/service";
import Client from "../models/client";

declare module "@vue/runtime-core" {
  interface Services {
    services: Service[];
  }

  interface Clients {
    clients: Client[];
  }

  interface State {
    services: Services;
    clients: Clients;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}
