import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";

import "../scss/components/content.scss";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const Redirect = ({ to }: any) => {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, [navigate, to]);
  return null;
};
const Content = () => {
  return (
    <main className="content d-flex">
      <Container fluid className="d-flex">
        <Suspense fallback={loading}>
          <Routes>
            {routes.map((route) => {
              return (
                route.Component && (
                  <Route
                    key={route.path as string}
                    path={route.path as string}
                    name={route.name as string}
                    element={<route.Component />}
                  />
                )
              );
            })}
            <Route path="/*" element={<Redirect to="/not-found" />} />
          </Routes>
        </Suspense>
      </Container>
    </main>
  );
};

export default React.memo(Content);
