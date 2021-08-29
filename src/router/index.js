import { createRouter, createWebHistory } from "vue-router";
import Header from "../components/Header.vue";

const routes = [{ path: "/", component: Header }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
