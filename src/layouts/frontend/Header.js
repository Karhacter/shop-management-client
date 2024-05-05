import { GiShoppingBag } from "react-icons/gi";
import Logo from "../../asset/logo1.jpg";
import { Link } from "react-router-dom";
import Menu from "./MainMenu";

const Header = () => {
  return (
    <section className="kah-header pt-1 bg-white border-bottom">
      <div className="container">
        <div className="row py-0">
          <div className="col-md-2 col-sm-6 col-md-2 py-1">
            <Link to="http://localhost:3000/">
              <img src={Logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="col-md-8 col-sm-9 d-none d-md-block col-md-7 ps-3 pt-2">
            <Menu />
          </div>
          <div className="col-md-2 col-sm-6 col-md-1py-4 py-md-2">
            <div className="row">
              <div className="col-md-4 pt-3 ">
                <Link to="#" className="text-decoration-none">
                  Login
                </Link>
              </div>
              <div className="col-md-4 pt-3">
                <Link to="#" className="text-decoration-none">
                  Register
                </Link>
              </div>
              <div className="col-md-3">
                <Link to="index/checkout" className="text-decoration-none">
                  <GiShoppingBag size={"50px"} className="pt-2" />
                </Link>
              </div>
            </div>
            <div className="box-cart text-center"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
