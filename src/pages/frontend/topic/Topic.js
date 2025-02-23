import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import TopicItem from "./TopicItem";
import Pagination from "../../Pagination";
import PostService from "../../../services/PostService";
import BrandService from "../../../services/BrandService";
import CategoryService from "../../../services/CategoryService";

const Topic = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState([]);
  const { slug } = useParams();
  const navigate = useNavigate();

  // Fetch paginated posts
  useEffect(() => {
    (async () => {
      const result = await PostService.list(currentPage, limit);
      if (result.pages) {
        setPages(result.pages);
        setTotalProducts(result.total); // Assuming API returns total items count
      }
    })();
  }, [currentPage, limit]);

  // Handle pagination
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    navigate(`/home/blog?page=${pageNumber}`);
  };

  // Fetch brands
  useEffect(() => {
    (async () => {
      const result = await BrandService.get_list();
      if (result.brands) {
        setBrands(result.brands);
      }
    })();
  }, []);

  // Fetch category details
  useEffect(() => {
    (async () => {
      const result = await CategoryService.detail(slug, 4);
      if (result.status === true) {
        setCategory(
          Array.isArray(result.category) ? result.category[0] : result.category
        );
      }
    })();
  }, [slug]);

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
                Tin tức
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Thể loại</li>
                <li className="list-group-item">
                  <Link
                    to="/home/product/category/tieu-thuyet"
                    className="text-decoration-none"
                  >
                    Tiểu thuyết
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/home/product/category/tam-ly"
                    className="text-decoration-none"
                  >
                    Tâm lý
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/home/product/category/kinh-te"
                    className="text-decoration-none"
                  >
                    Kinh tế
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="/home/product/category/truyen-tranh"
                    className="text-decoration-none"
                  >
                    Truyện tranh
                  </Link>
                </li>
              </ul>
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Nhà xuất bản</li>
                {brands.length > 0 &&
                  brands.map((brand, index) => (
                    <li className="list-group-item" key={index}>
                      <Link
                        to={`/home/product/brand/${brand.slug}`}
                        className="text-decoration-none"
                      >
                        {brand.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Main Content */}
            <div className="col-md-9 order-1 order-md-2">
              <div className="post-topic-title bg-main">
                <h3 className="fs-5 py-3 text-center">TIN TỨC</h3>
              </div>
              <div className="post-topic mt-3">
                {pages && pages.length > 0 ? (
                  pages.map((topic, index) => (
                    <div className="row post-item mb-4" key={index}>
                      <TopicItem topic={topic} />
                    </div>
                  ))
                ) : (
                  <p className="text-center">Không có bài viết nào.</p>
                )}
              </div>

              {/* Pagination */}
              <div className="row">
                <div className="col-12 text-center pt-3">
                  <Pagination
                    limit={limit}
                    currentPage={currentPage}
                    url="/home/blog"
                    onPageChange={handlePageChange}
                    total={totalProducts}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Topic;
