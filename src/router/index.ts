import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";
const LayOut = () => import("../views/Layout");
const Login = () => import("@/views/Login");
const routerHistory = createWebHashHistory();
const route = createRouter({
  history: routerHistory,
  routes: [
    {
      path: "",
      redirect: "/LayOut",
    },
    { path: "/Login", component: Login },
    {
      path: "/LayOut",
      component: LayOut,
      redirect: "/Layout",
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
