import { Route, Routes } from "react-router-dom";
import { ProductsListPage, ProductPage } from "../pages";

export const ProductsRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductPage />} />
        <Route path="/list" element={<ProductsListPage />} />
      </Routes>
    </>
  );
};
