const Pjt1Home = () => import("../views/Pjt1/views/Home");
const Pjt1 = () => import("@/views/Pjt1");
const prefix = "/";
const routes = (needPrefix: boolean = false) => [
  {
    path: `pjt1`,
    component: Pjt1,
    children: [
      { path: "/layout/pjt1/", redirect: "/layout/pjt1/Pjt1Home" },
      {
        path: `${needPrefix ? prefix : ""}Pjt1Home`,
        component: Pjt1Home,
      },
    ],
  },
];

export default routes;
