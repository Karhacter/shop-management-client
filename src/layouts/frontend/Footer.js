import Logo2 from "../../asset/logo2.png";
import FooterMenu from "./FooterMenu";

const Footer = () => {
  return (
    <section className="kah-footer py-4 bg-dark ">
      <div className="container">
        <div className="row">
          <div className="col-12 pt-3 pb-3 text-white position-relative">
            <a href="http://localhost:3000/">
              <img
                src={Logo2}
                className="position-absolute top-0 start-50 translate-middle pt-5"
              />
            </a>
          </div>
          <div className="col-12 pt-5 text-white col-lg-4 position-relative">
            <h4 className="widgettilte">THÔNG TIN</h4>
            <p>
              Chúng tôi luôn trân trọng và mong đợi nhận được mọi ý kiến đóng
              góp từ khách hàng để có thể nâng cấp trải nghiệm dịch vụ và sản
              phẩm tốt hơn nữa.
            </p>
          </div>
          <div className="col-12 pt-5 text-white col-lg-5">
            <div className="row">
              <FooterMenu />

              <div className="col-12 col-sm-6">
                <h4 className="widgettilte">HƯỚNG DẪN</h4>
                <p>
                  <a
                    href="#"
                    className="text-white link-underline link-underline-opacity-0"
                  >
                    Bookstore Member
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-white link-underline link-underline-opacity-0"
                  >
                    Mua hàng dễ dàng
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-white link-underline link-underline-opacity-0"
                  >
                    Hợp tác nhượng quyền
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-white link-underline link-underline-opacity-0"
                  >
                    Hướng dẫn mua hàng online
                  </a>
                </p>
                <p>
                  <a
                    href="#"
                    className="text-white link-underline link-underline-opacity-0"
                  >
                    Hướng dẫn kiểm tra hạng thẻ thành viên
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 pt-5 text-white col-lg-3">
            <h4 className="widgettilte">ĐĂNG KÝ NHẬN TIN</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
