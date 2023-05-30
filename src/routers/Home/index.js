import React from "react";
// * React router dom stuff
import { Route, Routes } from "react-router-dom";
import { homeRoutes as routes } from "routes";
import { RouteContainer } from "components";
export const HomeRouter = () => {
  return (
    <div className="home__router">
      <React.Suspense
        fallback={
          <div className="loading">
            <h1>Cargando...</h1>
          </div>
        }
      >
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              element={
                <RouteContainer isPrivate={route.isPrivate}>
                  <route.component />
                </RouteContainer>
              }
            />
          ))}
        </Routes>
      </React.Suspense>
    </div>
  );
};
