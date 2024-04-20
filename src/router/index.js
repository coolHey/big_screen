import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "homeView",
        component: () => import("../views/homeViews/indexView.vue"),
      },
      {
        path: "/equipmentShelfLife",
        name: "equipmentShelfLife",
        component: () => import("../views/equipmentShelfLife/indexView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "loginView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/login.vue"),
  },
  {
    path: "/test",
    name: "testView",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/testView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
