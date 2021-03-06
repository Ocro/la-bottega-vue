import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Clients from "../pages/Clients.vue";
import Services from "../pages/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
  {
    path: "/services",
    name: "Services",
    component: Services,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/About.vue"),
  },
];

// TODO Si electron, tester de mettre pas en mode history et de coder l'url.
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
