import ChinhSach from "./ChinhSach";
import Database from "../../../data/database.json";
import Coupun from "./Coupun";
import BannerItem from "./Banners";
import Search from "./Search";
import { SetProduct, ProdcutPop, NewProduct } from "./product";
import Collection from "./Collection";
import ProductPop from "./product/ProdcutPop";
import BannerSlide from "./BannerSlide";
import ModLast from "./ModLast";

const Home = () => {
  const listsetproduct = Database.setProduct;
  const listchinhsach = [
    {
      title: "Miễn phí vận chuyển",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_1.png?1706431926539",
      des: "Cho Đơn hàng từ 500k",
    },
    {
      title: "Đổi Trả",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_2.png?1706431926539",
      des: "Cho Đơn hàng từ 500k",
    },
    {
      title: "Thanh toán COD",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_3.png?1706431926539",
      des: "Cho Đơn hàng từ 500k",
    },
    {
      title: "Hotline: 0876472447",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/chinhsach_4.png?1706431926539",
      des: "Cho Đơn hàng từ 500k",
    },
  ];
  const listcoupun = [
    {
      title: "TẶNG BẠN MỚI",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_1.jpg?1706431926539",
      des: "Giảm 15% cho đơn hàng đầu tiên từ 699K",
      ma: "HELLO",
    },
    {
      title: "MIỄN PHÍ VẬN CHUYỂN",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_2.jpg?1706431926539",
      des: "Khi mua hóa đơn từ 250k bạn sẽ được nhận",
      ma: "FREESHIP",
    },
    {
      title: "GIẢM 50K",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_3.jpg?1706431926539",
      des: "Khi mua với hóa đơn 150k trở lên hoặc chính nó",
      ma: "SUDES50K",
    },
    {
      title: "TẶNG VOUCHER 50%",
      image:
        "https://bizweb.dktcdn.net/100/491/897/themes/915864/assets/img_coupon_4.jpg?1706431926539",
      des: "Khi mua từ 5 sản phẩm trở lên bạn sẽ được nhận voucher",
      ma: "SUDES50",
    },
  ];
  const bannerlist = [
    {
      image:
        "https://www.zhauthor.com/wp-content/uploads/2017/05/What-Makes-A-Book-Banner.jpg",
    },
    {
      image:
        "https://www.zhauthor.com/wp-content/uploads/2017/05/What-Makes-A-Book-Banner.jpg",
    },
  ];
  return (
    <h1>
      <section className="kah-maincontent">
        <div className="kah-slider">
          <BannerSlide />
        </div>

        <div className="kah-chinhsach py-4 border-bottom">
          <div className="container-fluid">
            <div className="row">
              {listchinhsach.map((chinhs, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <ChinhSach chinhs={chinhs} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="kah-search py-4 border-bottom">
          <div className="container-fluid">
            <div className="row">
              <div className="col">
                <Search />
              </div>
            </div>
          </div>
        </div>
        <div className="kah-coupunlist py-1">
          <div className="container-fluid py-5 pb-0">
            <div className="row">
              {listcoupun.map((coupun, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <Coupun coupun={coupun} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="kah-banner py-5 ">
          <div className="container-fluid">
            <div className="row">
              {bannerlist.map((banner, index) => {
                return (
                  <div className="col" key={index}>
                    <BannerItem banner={banner} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="kah-productlist p-2 maincontent">
          <div className="container-fluid">
            <h2 className="title-module fw-bold">Sản phẩm nổi bật</h2>
            <div className="group-module">
              <ul className="list-group list-group-horizontal fs-6 fw-normal pt-3 pb-3  border-top border-bottom position-relative">
                <li
                  className="list-group-item me-3 rounded-pill"
                  data-tab="tab-1"
                >
                  <a href="#" className="text-decoration-none text-dark">
                    Tất cả
                  </a>
                </li>
                <li
                  className="list-group-item me-3 rounded-pill"
                  data-tab="tab-2"
                >
                  <a href="#" className="text-decoration-none text-dark">
                    Light Novel
                  </a>
                </li>
                <li
                  className="list-group-item me-3 rounded-pill"
                  data-tab="tab-3"
                >
                  <a href="#" className="text-decoration-none text-dark">
                    Kinh Tế
                  </a>
                </li>
                <li
                  className="list-group-item me-3 rounded-pill"
                  data-tab="tab-4"
                >
                  <a href="#" className="text-decoration-none text-dark">
                    Phụ Kiện
                  </a>
                </li>
                <a
                  href="#"
                  className="text-decoration-none text-white btn btn-dark rounded-5 position-absolute end-0 bottom-3 "
                >
                  Xem thêm
                </a>
              </ul>
            </div>
            <div className="row">
              <div className="col-12">
                <ProdcutPop />
              </div>
            </div>
          </div>
        </div>
        <div className="kah-setproduct p-2 py-5">
          <div className="container-fluid">
            <h2 className="title-module fw-bold">Set sản phẩm nổi bật</h2>
            <div className="row py-3">
              {listsetproduct.map((setproduct, index) => {
                return (
                  <div className="col" key={index}>
                    <SetProduct setproduct={setproduct} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="kah-productnew p-2 pt-3">
          <div className="container-fluid">
            <div className="row">
              <h2 className="title-module fw-bold">
                <span>Sản phẩm mới</span>
                <span className="float-end">
                  <a
                    href="#"
                    className="text-decoration-none text-white btn btn-dark rounded-5"
                  >
                    Xem thêm
                  </a>
                </span>
              </h2>

              <div className="row">
                <div className="col">
                  <NewProduct />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="kah-productlike p-2 pt-4">
          <div className="pt-2">
            <div className="row">
              <h2 className="title-module fw-bold ps-4">
                <span>SPECIAL COLLECTIONS</span>
              </h2>

              <div className="col pt-3">
                <Collection />
              </div>
            </div>
          </div>
        </div>
        <ModLast />
      </section>
    </h1>
  );
};

export default Home;
