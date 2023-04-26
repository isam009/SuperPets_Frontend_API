/**
 *? AppRouter
 ** Usualmente este es el nombre que se le da al router principal de la aplicacion
 */

import { Route, Routes } from "react-router-dom";
import { ApiRoutes } from "../api";
import { LoginPage } from "../auth";
import { ProductsRoutes } from "../product";

const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />
        <Route path="/*" element={<ApiRoutes />} />
      </Routes>
    </>
  );
};

export default AppRouter;
