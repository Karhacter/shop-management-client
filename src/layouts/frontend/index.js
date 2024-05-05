import { Outlet } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Copyright from "./Copyright";

const LayoutFrontend = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Copyright />
    </>
  );
};

export default LayoutFrontend;
