import { createStore } from "vuex";
import Clients from "./modules/clients";
import Services from "./modules/services";
import Globals from "./modules/globals";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    clients: Clients,
    services: Services,
    globals: Globals,
  },
});
