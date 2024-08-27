import React from "react";

const People = React.lazy(() => import("../src/List"));
const NotFound = React.lazy(() => import("../src/NotFound"));
const routes = [
  {
    path: "/react",
    name: "Home",
    exact: true,
    Component: People,
  },
  {
    path: "/react/not-found",
    name: "Not Found",
    exact: true,
    Component: NotFound,
  },
  {
    path: "/react/people",
    name: "People",
    exact: true,
    Component: People,
  },
];

export default routes;
