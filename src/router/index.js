import Vue from "vue";
import VueRouter from "vue-router";
import Users from "../components/user/Users.vue";
import Departments from "../components/department/Departments.vue";
import Roles from "../components/role/Roles.vue";
import DomainGroupe from "../components/domain_groupe/DomainGroupe.vue";
import DamageType from "../components/damage_Type/DamageType.vue";
import Damage from "../components/damage/Damage.vue";
import domains from "../components/domain/Domains.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/user",
    name: "user",
    component: Users,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/departement",
    name: "Departement",
    component: Departments,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/role",
    name: "Role",
    component: Roles,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/domainGroupe",
    name: "Domain Groupe",
    component: DomainGroupe,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/damageType",
    name: "Damage Type",
    component: DamageType,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/damage",
    name: "Damage",
    component: Damage,

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: "/Domain",
    name: "domain",
    component: domains,
  },
];
const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
