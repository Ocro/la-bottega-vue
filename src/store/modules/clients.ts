import axios from "axios";
import _map from "lodash/map";
import Client from "../../models/client";

export default {
  namespaced: true,
  state: {
    clients: [] as Array<Client>,
  },
  actions: {
    async getClients(state: { commit: any }) { // TODO enlever cet any, voir vuex x typescript
      const response = await axios.get(
        "http://127.0.0.1/la-bottega/api/client/read.php"
      );
      state.commit("SET_CLIENTS", response.data);
    },
  },
  mutations: {
    SET_CLIENTS(state: { clients: Array<Client> }, json_response: any) {
      state.clients = _map(json_response, (client) => {
        return {
          id: parseInt(client.id, 10),
          name: client.name,
          firstname: client.firstname,
          address: client.address,
          npa: parseInt(client.npa, 10) || null,
          city: client.city,
          phone: client.phone,
        };
      });
    },
  },
};
