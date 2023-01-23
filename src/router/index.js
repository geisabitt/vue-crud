import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/consultar",
    name: "consultar",
    component: () => import("../views/ConsultarView.vue"),
  },
  {
    path: "/editar/:_id",
    name: "editar",
    component: () => import("../views/EditarView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
