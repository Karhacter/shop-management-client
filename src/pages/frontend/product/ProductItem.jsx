import { Link } from "react-router-dom";
import { urlImage } from "../../../config.js";
import { useEffect, useState } from "react";
import CategoryService from "../../../services/CategoryService.js";
import BrandService from "../../../services/BrandService.js";

const ProductItem = (props) => {
  const product = props.product;
  const [insertId, setInsertId] = useState(0);
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await CategoryService.get_list();
        if (result.status === true) {
          setCategorys(result.categorys);
          console.log(result.categorys);
        }
      })();
    },
    [insertId]
  );

  // brand
  useEffect(
    function () {
      (async () => {
        const result = await BrandService.get_list();
        if (result.status === true) {
          setBrands(result.brands);
          console.log(result.brands);
        }
      })();
    },
    [insertId]
  );
  const getCategoryName = (categoryId) => {
    const category = categorys.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const getBrandName = (brandId) => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.name : "Unknown";
  };
  return (
    <div className="product-item">
      <Link
        className="row row-fix mt-3 card border-2 pe-0 m-1 main-product-item"
        to={"/san-pham/" + product.slug}
      >
        <img
          src={urlImage + "products/" + product.image}
          className="img-fluid "
        />

        <div className="content">
          <h3 className="product-item-name fs-5 text-decoration-none text-warning">
            {product.name}
          </h3>
          <div className="row mt-1 mt-4">
            <div className="col">
              <span className="card-text fs-5 text-primary">Thể Loại</span>

              <p className="card-text fs-5 fw-light text-black">
                {getCategoryName(product.category_id)}
              </p>
            </div>
            <div className="col">
              <span className="card-text fs-5 text-primary">Nhà Xuất Bản</span>
              <p className="card-text fs-5 fw-light text-center text-black">
                {getBrandName(product.brand_id)}
              </p>
            </div>
          </div>
          <div className="row row-fix mt-4">
            <div className="price-box mt-0 col pt-2">
              <span className="fs-5 text-danger">
                {new Intl.NumberFormat("de-DE").format(product.price)}đ
              </span>
              <span className="ms-2">
                <small className="fs-6 text-decoration-line-through ">
                  {new Intl.NumberFormat("de-DE").format(product.pricesale)}đ
                </small>
              </span>
            </div>
            <div className="col mt-1 fs-5 text-center">
              <span className="border rounded-3 p-1 ps-2 pe-2 bg-danger text-white">
                -50%
              </span>
            </div>
          </div>
          <div className="main-description mt-3">
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
