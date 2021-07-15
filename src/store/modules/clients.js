import axios from "axios";
import _map from "lodash/map.js";

export default {
  namespaced: true,
  state: {
    clients: [],
  },
  actions: {
    async getClients({ commit }) {
      let response = await axios.get(
        "http://127.0.0.1/la-bottega/api/client/read.php"
      );
      commit("SET_CLIENTS", response.data);
    },
  },
  mutations: {
    SET_CLIENTS(state, clients) {
      state.clients = _map(clients, (value) => {
        return {
          id: parseInt(value.id, 10),
          name: value.name,
          firstname: value.firstname,
          phone: value.phone,
          address: value.address,
          npa: parseInt(value.npa, 10) || null,
          city: value.city || null,
        };
      });
    },
  },
};
