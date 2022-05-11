import CustomizedAxios from "../../plugins/axios";

const domainModule = {
  state: {
    domains: [],
  },
  mutations: {
    SET_DOMAINS(state, domains) {
      state.domains = domains;
    },
    ADD_DOMAIN(state, domain) {
      state.domains.push(domain);
    },
    DELETE_DOMAIN(state, id) {
      state.domains = state.domains.filter((c) => c.id != id);
    },
    EDIT_DOMAINS(state, domain) {
      state.domains = state.domains.map((c) => {
        if (c.id == domain.id) return domain;
        return c;
      });
    },
  },
  actions: {
    setDomainAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("domains/")
          .then((response) => {
            commit("SET_DOMAINS", response.data);
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDomainAction({ commit }, domain) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("domains/add", {
          id: domain.id,
          name: domain.name,
        })
          .then((response) => {
            commit("ADD_DOMAIN", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteDomainAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("domains/delete/" + id)
          .then((response) => {
            commit("DELETE_DOMAIN", id);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editDomainAction({ commit }, domain) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.put("/domains/update", {
          id: domain.id,
          name: domain.name,
        })
          .then((response) => {
            commit("EDIT_DOMAINS", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getdomains: (state) => {
      return state.domains;
    },
  },
};
export default domainModule;
