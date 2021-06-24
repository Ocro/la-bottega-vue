import axios from "axios";
import _keyBy from "lodash/keyBy";
import _cloneDeep from "lodash/cloneDeep";

import Service from "../../models/service";
import _map from "lodash/map";

export default {
  namespaced: true,
  state: {
    services: {} as Service[],
  },
  actions: {
    async getServices(state: { commit: any }) {
      // TODO enlever cet any, voir vuex x typescript
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      const response = await axios.get(
        "http://127.0.0.1/la-bottega/api/service/read.php"
      );
      state.commit("initServices", response.data);
    },
    async createService(state: { dispatch: any }, service: Service) {
      // TODO enlever cet any, voir vuex x typescript
      const response = await axios.post(
        "http://127.0.0.1/la-bottega/api/service/create.php",
        service
      );
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      if (response.data) {
        // On recharge tous les services pour que la liste soit triée correctement.
        state.dispatch("getServices");
      }
    },
    async updateService(state: { commit: any }, service: Service) {
      const response = await axios.post(
        "http://127.0.0.1/la-bottega/api/service/update.php",
        service
      );
      // TODO gérer les erreurs (code retour http + erreur de l'api);
      if (response.data) {
        state.commit("initService", service);
      }
    },
  },
  mutations: {
    initServices(state: any, services: any) {
      // TODO enlever cet any, voir vuex x typescript
      const services___ = _map(services, (service) => {
        // TODO refactor. les services doivent etre construits dans les actions et pas dans les mutations. faire pareil pour les services.
        return {
          id: parseInt(service.id, 10),
          service: service.service,
          price: service.price,
          archived: service.archived,
        };
      });

      state.services = _keyBy(services___, (o) => o.id);
    },
    initService(state: any, newService: Service) {
      // TODO enlever cet any, voir vuex x typescript
      // @ts-ignore
      state.services[newService.id] = _cloneDeep(newService);
    },
  },
};
