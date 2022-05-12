import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
const LayOut = () => import("../views/Layout");
const routerHistory = createWebHashHistory();
const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "/LayOut",
      component: LayOut,
      children: [
        {
          path: "/LayOut/",
          redirect: "/layout/pjt1",
        },
        ...routes(),
      ],
    },
  ],
});
export default route;
