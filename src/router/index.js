import { createRouter, createWebHistory } from "@ionic/vue-router";
import HomeView from "../views/HomeView.vue";
import AppPrimaryNav from "../components/partial/AppPrimaryNav.vue";

const routes = [
  {
    path: "/",
    redirect: "/tabs/tab1",
  },
  {
    path: "/tabs/",
    component: AppPrimaryNav,
    children: [
      {
        path: "",
        redirect: "tab1",
      },
      {
        name: "home",
        path: "tab1",
        // component: () => import('@/views/Tab1.vue')
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
