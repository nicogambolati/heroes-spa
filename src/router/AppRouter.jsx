import { Routes, Route } from "react-router-dom";

import { LoginPages } from "../auth";
import { HeroesRoutes } from "../heroes";
import { PrivateRoute } from "../heroes/routes/PrivateRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<LoginPages />} />

      <Route
        path="/*"
        element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
