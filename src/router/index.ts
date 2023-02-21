import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HairTop from "../pages/top/Hair.vue";
import NailTop from "../pages/top/Nail.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "hairTop",
    component: HairTop,
  },
  {
    path: "/nail",
    name: "nailTop",
    component: NailTop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
