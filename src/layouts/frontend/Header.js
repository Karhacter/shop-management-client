import { useState, useEffect } from "react";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import Logo from "../../asset/logo1.jpg";
import Menu from "./MainMenu";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check localStorage for login status
  useEffect(() => {
    const user = localStorage.getItem("userData"); // Adjust key based on your storage logic
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user"); // Remove user data
    setIsLoggedIn(false);
  };

  return (
    <section className="kah-header pt-1 bg-white border-bottom">
      <div className="container">
        <div className="row py-0">
          <div className="col-md-2 col-sm-6 py-1">
            <Link to="/home">
              <img src={Logo} className="img-fluid" alt="logo" />
            </Link>
          </div>
          <div className="col-md-8 col-sm-9 d-none d-md-block ps-3 pt-2">
            <Menu />
          </div>
          <div className="col-md-2 col-sm-6 py-md-2">
            <div className="row">
              {isLoggedIn ? (
                <>
                  <div className="col-md-4 pt-3">
                    <Link to="/home/profile" className="text-decoration-none">
                      Profile
                    </Link>
                  </div>
                  <div className="col-md-4 pt-3">
                    <Link className="text-decoration-none" onClick={handleLogout}>
                      Logout
                    </Link>
                  </div>
                </>
              ) : (
                <>
                  <div className="col-md-4 pt-3">
                    <Link to="/home/login" className="text-decoration-none">
                      Login
                    </Link>
                  </div>
                  <div className="col-md-4 pt-3">
                    <Link to="/home/register" className="text-decoration-none">
                      Register
                    </Link>
                  </div>
                </>
              )}
              <div className="col-md-3">
                <Link to="/home/checkout" className="text-decoration-none">
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
