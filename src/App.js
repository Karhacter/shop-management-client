import { useRoutes} from "react-router-dom";
import React, { useState } from 'react';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import LayoutFrontend from "./layouts/frontend";
import LayoutBackend from "./layouts/backend";
import RouterSite from "./router/FrontendRouter";
import RouterAdmin from "./router/BackendRouter";
import NoPage from "../src/pages/frontend/NoPage";
function App() {
    let element = useRoutes([
      {
        path: "/",
        element: <LayoutFrontend/>,
        children: RouterSite,
      },
      {
        path: "admin",
        element: <LayoutBackend/>,
        children: RouterAdmin,
      },
      {
        path:"*",
        element: <NoPage />
      }
    ]);
    return element;
}

export default App;
