import React from "react";

const People = React.lazy(() => import("../src/List"));
const NotFound = React.lazy(() => import("../src/NotFound"));
const routes = [
  {
    path: "/",
    name: "Home",
    exact: true,
  },
  {
    path: "/not-found",
    name: "Not Found",
    exact: true,
    Component: NotFound,
  },
  {
    path: "/people",
    name: "People",
    exact: true,
    Component: People,
  },
];

export default routes;
