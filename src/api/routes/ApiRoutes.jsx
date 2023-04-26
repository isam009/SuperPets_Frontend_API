import { Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { HomePage } from "../pages";
import { ProductsRoutes } from "../../product";
import { Container } from "@mui/material";
import {
  AppRegistration,
  Home,
  Inventory,
  Login,
  Menu,
} from "@mui/icons-material";
import ResponsiveAppBar from "../components/ResponsiveAppBar";

const navLinks = [
  {
    title: "Home",
    path: "home",
    icon: <Home />,
  },
  {
    title: "Productos",
    path: "products/",
    icon: <Inventory />,
  },
];

const authLinks = [
  {
    title: "Login",
    path: "/Login",
    icon: <Login />,
  },
  {
    title: "Register",
    path: "#Register",
    icon: <AppRegistration />,
  },
];

export const ApiRoutes = () => {
  return (
    <>
      {/* <Navbar navLinks={navLinks} authLinks={authLinks}/> */}
      <ResponsiveAppBar navLinks={navLinks} authLinks={authLinks} />
      <Container sx={{ mt: 5 }}>
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="products/*" element={<ProductsRoutes />} />
          <Route path="/" element={<Navigate to="/home" />} />
        </Routes>
      </Container>
    </>
  );
};
