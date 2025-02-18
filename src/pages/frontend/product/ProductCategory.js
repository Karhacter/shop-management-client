import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import { Link, Navigate, useParams } from "react-router-dom";
import ProductItem from "./ProductItem";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";
import Pagination from "../../Pagination";

const ProductCategory = () => {
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState({});
  let { slug } = useParams();
  const [products, setProducts] = useState([]);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  useEffect(() => {
    (async () => {
      const result = await BrandService.get_list();
      setBrands(result.brands);
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const result = await CategoryService.detail(slug, 4);
      if (result.status === true) {
        const categoryObject = Array.isArray(result.category)
          ? result.category[0]
          : result.category;
        setCategory(categoryObject);
      }
    })();
  }, [slug]);

  useEffect(() => {
    (async () => {
      const result2 = await ProductService.list_product_category(
        category.id,
        1,
        limit
      );
      setProducts(result2.products);
    })();
  }, [limit, category.id]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update URL with new page number
    Navigate(`/san-pham?page=${pageNumber}`);
  };

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <Link className="text-main" to="/">
                  Trang chủ
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {category.name}
              </li>
            </ol>
          </nav>
        </div>
      </section>
      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Thể loại</li>
                <li className="list-group-item">
                  <Link
                    to="/san-pham/the-loai/tieu-thuyet"
                    className="text-decoration-none"
                  >
                    Tiểu thuyết
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/san-pham/the-loai/tam-ly"
                    className="text-decoration-none"
                  >
                    Tâm lý
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/san-pham/the-loai/kinh-te"
                    className="text-decoration-none"
                  >
                    Kinh tế
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/san-pham/the-loai/truyen-tranh"
                    className="text-decoration-none"
                  >
                    Truyện tranh
                  </Link>
                </li>
              </ul>
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Nhà xuất bản</li>
                {brands &&
                  brands.length > 0 &&
                  brands.map((brand, index) => {
                    return (
                      <li className="list-group-item">
                        <Link
                          to={"/san-pham/nha-xuat-ban/" + brand.slug}
                          className="text-decoration-none"
                        >
                          {brand.name}
                        </Link>
                      </li>
                    );
                  })}
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <div className="category-title bg-main">
                <h3 className="fs-5 py-3 text-center">{category.name}</h3>
              </div>
              <div className="product-category mt-3">
                <div className="row product-list">
                  {products &&
                    products.length > 0 &&
                    products.map((product, index) => {
                      return (
                        <div className="col-6 col-md-4" key={index}>
                          <ProductItem product={product} />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 text-end pt-0">
              <Pagination
                limit={limit}
                currentPage={currentPage}
                url={"/san-pham/the-loai"} // Example base URL
                onPageChange={handlePageChange}
                total={totalProducts}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
