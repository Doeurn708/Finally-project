import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenView from "../views/MenView.vue";
import WomenView from "../views/WomenView.vue";
import NotFound from "../404/NotFound.vue";
import SportView from "../views/SportView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/men",
    name: "men",
    component: MenView,
  },
  {
    path: "/women",
    name: "women",
    component: WomenView,
  },
  {
    path: "/sport",
    name: "sport",
    component:SportView
  },
  {
    path: "/not-404",
    name: "not-found",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
