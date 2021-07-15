import axios from "axios";
import _keyBy from "lodash/keyBy";
import _cloneDeep from "lodash/cloneDeep";

export default {
  namespaced: true,
  state: {
    services: {},
  },
  actions: {
    async getServices({ commit }) {
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      let response = await axios.get(
        "http://127.0.0.1/la-bottega/api/service/read.php"
      );
      commit("initServices", response.data);
    },
    async createService({ dispatch }, service) {
      let response = await axios.post(
        "http://127.0.0.1/la-bottega/api/service/create.php",
        service
      );
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      if (response.data) {
        // On recharge tous les services pour que la liste soit triée correctement.
        dispatch("getServices");
      }
    },
    async updateService({ commit }, service) {
      let response = await axios.post(
        "http://127.0.0.1/la-bottega/api/service/update.php",
        service
      );
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      if (response.data) {
        commit("initService", service);
      }
    },
  },
  mutations: {
    initServices(state, services) {
      state.services = _keyBy(services, (o) => o.id);
    },
    initService(state, newService) {
      state.services[newService.id] = _cloneDeep(newService);
    },
  },
};
