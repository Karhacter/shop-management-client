import { useEffect, useState } from "react";
import ProductService from "../../../services/ProductService";
import ProductItem from "./ProductItem";
import Pagination from "../../Pagination";
import { Navigate, useLocation } from "react-router-dom";

const Product = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const page = parseInt(queryParams.get("page")) || 1;

  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchData();
    const newOffset = (currentPage - 1) * limit;
    setOffset(newOffset);
  }, [currentPage, limit]);

  const fetchData = async () => {
    try {
      const result = await ProductService.list(currentPage, limit);
      setProducts(result.products);
      setTotalProducts(result.totalCount);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

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
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <div className="col-6 col-md-3 mb-4" key={product.id}>
                    <ProductItem product={product} />
                  </div>
                );
              })}
          </div>
          <div className="row">
            <div className="col-12 text-center pt-3">
              <Pagination
                limit={limit}
                currentPage={currentPage}
                url={"/san-pham"} // Example base URL
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
