import { useEffect, useState } from "react";
import MenuService from "../../services/MenuService";
import FooterMenuItem from "./FooterMenyItem";

const FooterMenu = () => {
  const [menus, setMenus] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await MenuService.list(0, 12);
      if (result.status === true) {
        setMenus(result.menus);
      }
    })();
  }, []);
  return (
    <div className="col-12 col-sm-6">
      <h4 className="widgettilte">CHÍNH SÁCH</h4>
      {menus &&
        menus.length > 0 &&
        menus.map((menu, index) => {
          if (menu.position == "footermenu") {
            return <FooterMenuItem key={index} menu={menu} />;
          }
        })}
    </div>
  );
};

export default FooterMenu;
