import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

import LayoutFrontend from "./layouts/frontend";
import LayoutBackend from "./layouts/backend";
import AppRouter from "./router";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutFrontend />}>
          {AppRouter.FrontendRouter.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
        <Route path="/admin" element={<LayoutBackend />}>
          {AppRouter.BackendRouter.map((route, index) => {
            const Page = route.component;
            return <Route key={index} path={route.path} element={<Page />} />;
          })}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
