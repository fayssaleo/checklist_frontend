import CustomizedAxios from "../../plugins/axios";

const domainGroupeModule = {
  state: {
    domainGroupes: [],
  },
  mutations: {
    SET_DOMAINGROUPES(state, domainGroupes) {
      state.domainGroupes = domainGroupes;
    },
    ADD_DOMAINGROUPE(state, domainGroupes) {
      state.domainGroupes.push(domainGroupes);
    },
    DELETE_DOMAINGROUPE(state, id) {
      state.domainGroupes = state.domainGroupes.filter((c) => c.id != id);
    },
    EDIT_DOMAINGROUPE(state, domainGroupes) {
      state.domainGroupes = state.domainGroupes.map((c) => {
        if (c.id == domainGroupes.id) return domainGroupes;
        return c;
      });
    },
  },
  actions: {
    setDOMAINGROUPESAction({ commit }) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.get("groupes/")
          .then((response) => {
            commit("SET_DOMAINGROUPES", response.data);
            console.log("set domainGroupes ");
            resolve(response);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    addDOMAINGROUPEAction({ commit }, domainGroupes) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("groupes/add", {
          id: domainGroupes.id,
          name: domainGroupes.name,
          departement: domainGroupes.departement,
          domain: {
            id: domainGroupes.domain.id,
          },
        })
          .then((response) => {
            console.log("res add ", response);
            commit("ADD_DOMAINGROUPE", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },

    deleteDOMAINGROUPEAction({ commit }, id) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.post("groupes/delete/" + id)
          .then((response) => {
            commit("DELETE_DOMAINGROUPE", id);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    editDOMAINGROUPEAction({ commit }, domainGroupes) {
      return new Promise((resolve, reject) => {
        CustomizedAxios.put("/groupes/update", {
          id: domainGroupes.id,
          name: domainGroupes.name,
          departement: domainGroupes.departement,
          domain: {
            id: domainGroupes.domain.id,
          },
        })
          .then((response) => {
            commit("EDIT_DOMAINGROUPE", response.data);
            resolve(response.data);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
  },
  getters: {
    getdomainGroupes: (state) => {
      return state.domainGroupes;
    },
  },
};
export default domainGroupeModule;
