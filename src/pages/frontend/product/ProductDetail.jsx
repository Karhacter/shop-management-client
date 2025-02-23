import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService.js";
import CartService from "../../../services/CartService.js";
import ProductItem from "./ProductItem.jsx";
import { urlImage } from "../../../config.js";

const ProductDetail = () => {
  let { slug } = useParams();
  const [product, setProduct] = useState([]);
  const [products, setProducts] = useState([]);
  const [qty, setQty] = useState(1); // Quantity state

  useEffect(() => {
    (async () => {
      try {
        const result = await ProductService.detail(slug, 4);
        setProduct(result.product);
        setProducts(result.products);
      } catch (error) {
        console.error("Error fetching product details", error);
      }
    })();
  }, [slug]);

  const handleAddToCart = async (productId, quantity) => {
    try {
      const result = await CartService.addToCart(productId, quantity); // Pass quantity when adding to cart
      console.log("Product added to cart successfully", result.productId);
      alert("Đã thêm một sản phẩm vào giỏ hàng");
      window.location.href = "/home/cart";
    } catch (error) {
      console.error("Failed to add product to cart", error);
    }
  };

  const handleQuantityChange = (delta) => {
    setQty((prev) => Math.max(1, prev + delta)); // Prevent negative quantities
  };

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
            <div className="text-dark ms-1 mt-3 text-decoration-line-through">
              {new Intl.NumberFormat("de-DE").format(product.pricesale)} đ
            </div>
            <h2 className="text-main py-4p-2 h1 mb-3">
              <div className="flex-fill text-danger">
                {new Intl.NumberFormat("de-DE").format(product.price)} đ
              </div>
            </h2>

            {/* Quantity product */}
            <div className="mb-3">
              <label>Số lượng: </label>
              <div className="input-group mb-3">
                <button
                  className="input-group-text"
                  onClick={() => handleQuantityChange(-1)}
                >
                  -
                </button>
                <input
                  type="text"
                  value={qty}
                  id="qty"
                  readOnly
                  className="text-center"
                  size="3"
                />
                <button
                  className="input-group-text"
                  onClick={() => handleQuantityChange(1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="mb-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleAddToCart(product.id, qty);
                }}
              >
                <button type="submit" className="btn btn-success me-1">
                  Mua ngay
                </button>
                <button
                  type="button"
                  className="btn btn-success ms-3"
                  onClick={() => handleAddToCart(product.id, qty)}
                >
                  Thêm vào giỏ hàng
                </button>
              </form>
            </div>
          </div>
          <h2 className="text-success">CHI TIẾT SẢN PHẨM</h2>
          <div className="row">
            <div className="col-12 order-1 order-md-2">
              <p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: product?.detail || "No content available.",
                  }}
                />
              </p>
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
