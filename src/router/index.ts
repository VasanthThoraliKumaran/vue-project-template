import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import NotFound from "../fallback-view/NotFound.vue";

Vue.use(VueRouter);
const routes: Array<RouteConfig> = [
  {
    path: "*",
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
