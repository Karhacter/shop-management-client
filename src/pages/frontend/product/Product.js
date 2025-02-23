import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem from "./ProductItem";
import Pagination from "../../Pagination";
import { useLocation, useNavigate } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const navigate = useNavigate();

  const page = parseInt(queryParams.get("page")) || 1;
  const [limit] = useState(20);
  const [currentPage, setCurrentPage] = useState(page);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await ProductService.list(currentPage, limit);
        setProducts(result.products);
        setTotalProducts(result.totalCount);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, limit]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > Math.ceil(totalProducts / limit)) return; // Prevent invalid pages
    setCurrentPage(pageNumber);
    navigate(`/home/product-all?page=${pageNumber}`);
  };

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <a className="text-main" href="http://localhost:3000/">
                  Trang chủ
                </a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Sản phẩm
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="maincontent mb-5 mt-4">
        <div className="container">
          <h1 className="text-center text-success mb-4">TẤT CẢ SẢN PHẨM</h1>
          <div className="row">
            {products.length > 0 ? (
              products.map((product) => (
                <div className="col-6 col-md-3 mb-4" key={product.id}>
                  <ProductItem product={product} />
                </div>
              ))
            ) : (
              <p className="text-center">Không có sản phẩm nào.</p>
            )}
          </div>

          {/* Pagination UI */}
          <div className="row">
            <div className="col-12 text-center pt-3">
              <Pagination
                limit={limit}
                currentPage={currentPage}
                url="/home/product-all"
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

export default Product;
