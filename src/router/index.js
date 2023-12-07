import {createRouter, createWebHistory} from "vue-router";

import FormItem from "../views/FormItem.vue";

const routes = [
  {
    path: "/",
    name: "FormItem",
    component: FormItem,
  },
  {
    path: "/consultar",
    name: "consultar",
    component: () => import("../views/ConsultarView.vue"),
  },
  {
    path: "/editar/:id",
    name: "editar",
    component: () => import("../views/EditarView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
