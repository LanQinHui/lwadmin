import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/404.vue";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

const routes = [
  {
    path: "/user",
    component: () =>
      import(/* webpackChunkName: "user" */ "../views/user/Login"),
    children: [
      {
        path: "/user",
        redirect: "/user/login",
      },
      {
        path: "/user/login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Login"),
      },
      {
        path: "/user/register",
        name: "register",
        component: () =>
          import(/* webpackChunkName: "user" */ "../views/user/Register"),
      },
    ],
  },
  {
    path: "/",
    component: () =>
      import(/* webpackChunkName: "layout" */ "../layouts/BasicLayout"),
    children: [
      // dashboard
      {
        path: "/",
        redirect: "/dashboard/analysis",
      },
      {
        path: "/dashboard",
        name: "dashboard",
        component: () =>
          import(/* webpackChunkName: "user" */ "../layouts/BasicLayout"),
        children: [
          {
            path: "/dashboard/analysis",
            name: "analysis",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "../views/dashboard/Analysis"
              ),
          },
        ],
      },
    ],
  },
  //form
  {
    path: "/form",
    name: "form",
    component: () =>
      import(/* webpackChunkName: "form" */ "../views/form/Basicform"),
    children: [
      {
        path: "/form/basic-form",
        name: "basicform",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/form/Basicform"),
      },
      {
        path: "/form/step-form",
        name: "stepform",
        component: () =>
          import(/* webpackChunkName: "form" */ "../views/form/Stepform"),
        children: [
          {
            path: "/form/step-form",
            redirect: "/form/step-form/info",
            component: () =>
              import(/* webpackChunkName: "form" */ "../views/form/Stepform"),
          },
          {
            path: "/form/step-form/info",
            name: "info",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/form/stepform/step1"
              ),
          },
          {
            path: "/form/step-form/confirm",
            name: "confirm",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/form/stepform/step2"
              ),
          },
          {
            path: "/form/step-form/result",
            name: "result",
            component: () =>
              import(
                /* webpackChunkName: "form" */ "../views/form/stepform/step3"
              ),
          },
        ],
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
export default router;
