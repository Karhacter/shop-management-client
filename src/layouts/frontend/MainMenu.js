import MenuService from "../../services/MenuService";
import { useEffect, useState } from "react";
import MainMenuItem from "./MainMenuItem";

const MainMenu = () => {
  // const [menus, setMenus] = useState([]);
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await MenuService.list(0, 11);
      if (result.status === true) {
        setMenus(result.menus);
      }
    })();
  }, []);
  //
  return (
    <nav className="navbar navbar-expand-lg fs-5">
      <div className="container-fluid">
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-4">
            {menus &&
              menus.length > 0 &&
              menus.map((menu, index) => {
                if (menu.position == "mainmenu") {
                  return <MainMenuItem key={index} menu={menu} />;
                }
              })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MainMenu;
