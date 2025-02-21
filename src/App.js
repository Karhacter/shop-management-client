import { useRoutes } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "font-awesome/css/font-awesome.min.css";
import "./index.css"; // Ensure Tailwind styles are applied
import LayoutFrontend from "./layouts/frontend";
import LayoutBackend from "./layouts/backend";
import RouterSite from "./router/FrontendRouter";
import RouterAdmin from "./router/BackendRouter";
import NoPage from "../src/pages/frontend/NoPage";
import LoginForm from "./pages/frontend/account/LoginForm";
import RouterLogin from "./router/RouterLogin";

function App() {
  let element = useRoutes([

    {
      path: "/",
      element: <LoginForm />,
      children: RouterLogin,
    },
    {
      path: "/home",
      element: <LayoutFrontend />,
      children: RouterSite,
    },
    {
      path: "admin",
      element: <LayoutBackend />,
      children: RouterAdmin,
    },
    {
      path: "*",
      element: <NoPage />,
    },
  ]);

  return element;
}

export default App;
