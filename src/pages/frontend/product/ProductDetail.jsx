import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService.js";
import ProductItem from "./ProductItem.jsx";
import { urlImage } from "../../../config.js";

const ProductDetail = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await ProductService.detail(slug, 4);
      setProduct(result.product); // chi tiet
      setProducts(result.products); // cung loai
      console.log(result.product);
    })();
  }, [slug]);
  return (
    <section className="maincontent py-2">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="image">
              <img
                src={urlImage + "products/" + product.image}
                className="img-fluid"
              />
            </div>
            <div className="list-image mt-3">
              <div className="row">
                <div className="col-3">
                  <img
                    className="img-fluid w-100"
                    src={urlImage + "products/" + product.image2}
                    alt="..."
                    onclick="changeimage(src)"
                  />
                </div>
                <div className="col-3">
                  <img
                    className="img-fluid"
                    src={urlImage + "products/" + product.image3}
                    alt="..."
                    onclick="changeimage(src)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="text-main">{product.name}</h1>
            <h3 className="fs-5 py-2">{product.description}</h3>
            <h2 className="text-main py-4   p-2 h1">
              <div className="flex-fill text-danger">
                {new Intl.NumberFormat("de-DE").format(product.price)} đ
              </div>
            </h2>
            <div className="mb-3">
              <label for="">Số lượng</label>
              <div className="input-group mb-3">
                <span
                  className="input-group-text"
                  id="sub"
                  onclick="changenumber(id)"
                >
                  -
                </span>
                <input
                  type="text"
                  value="1"
                  id="qty"
                  className="text-center"
                  size="3"
                />
                <span
                  className="input-group-text"
                  id="add"
                  onclick="changenumber(id)"
                >
                  +
                </span>
              </div>
            </div>
            <div className="mb-3">
              <Link className="btn btn-success me-1">Mua ngay</Link>
              <button className="btn btn-success ms-1" aria-hidden="true">
                Thêm vào giỏ hàng
              </button>
            </div>
          </div>
          <h2 className="text-success">CHI TIẾT SẢN PHẨM</h2>
          <div className="row">
            <div className="col-12 order-1 order-md-2">
              <p>{product.detail}</p>
            </div>
          </div>
          <h2 className="text-success">SẢN PHẨM KHÁC</h2>
          <div className="row">
            <div className="row">
              {products &&
                products.length > 0 &&
                products.map((product, index) => {
                  if (
                    product.category_id === product.category_id ||
                    product.brand_id === product.brand_id
                  ) {
                    return (
                      <div className="col-3" key={index}>
                        <ProductItem product={product} />
                      </div>
                    );
                  }
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
