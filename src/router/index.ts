import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import TopPage from "../pages/Top.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "topPage",
    component: TopPage,
  },
  {
    path: "/nail",
    name: "topPage",
    component: TopPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
