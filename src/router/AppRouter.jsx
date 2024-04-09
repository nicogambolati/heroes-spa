import { Routes, Route, Navigate } from "react-router-dom";

import { MarvelPage } from "../heroes/pages/MarvelPage";
import { DcPage } from "../heroes/pages/DcPage";
import { LoginPages } from "../auth/pages/LoginPages";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/marvel" />} />
      <Route path="marvel" element={<MarvelPage />} />
      <Route path="dc" element={<DcPage />} />
      <Route path="login" element={<LoginPages />} />
    </Routes>
  );
};
