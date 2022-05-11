import Vue from "vue";
import Vuex from "vuex";
import usersModule from "./models/userModule";
import departementModule from "./models/departementModule";
import rolesModule from "./models/roleModule";
import domainGroupeModule from "./models/domainGroupeModule";
import damageTypeModule from "./models/damageTypeModule";
import domainModule from "./models/domainModule";

Vue.use(Vuex);

let store = null;
export default function () {
  store = new Vuex.Store({
    modules: {
      usersModule,
      departementModule,
      rolesModule,
      domainGroupeModule,
      damageTypeModule,
      domainModule,
    },
    state: {},
    mutations: {},
    actions: {},
    getters: {},
    plugins: [],
  });
  return store;
}
export { store };
