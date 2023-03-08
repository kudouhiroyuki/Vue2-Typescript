import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Top from "../pages/Top.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "hairTop",
    component: Top,
  },
  {
    path: "/nail",
    name: "nailTop",
    component: Top,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
