import { Routes, Route } from "react-router-dom";

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";
import { PublicRoute } from "../heroes/routes/PublicRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPages />
          </PublicRoute>
        }
      />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />

      {/* <Route path="login" element={<LoginPages />} />*/}
      {/* <Route path="/*" element={<HeroesRoutes />} /> */}
    </Routes>
  );
};
