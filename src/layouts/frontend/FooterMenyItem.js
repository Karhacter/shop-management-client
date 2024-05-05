import { Link } from "react-router-dom";

const FooterMenuItem = (props) => {
  const menu = props.menu;
  return (
    <>
      {" "}
      <p>
        <Link
          to={menu.link}
          className="text-white link-underline link-underline-opacity-0"
        >
          {menu.name}
        </Link>
      </p>
    </>
  );
};

export default FooterMenuItem;
