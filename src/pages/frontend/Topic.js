import { useEffect, useState } from "react";
import TopicItem from "./TopicItem";
import PostService from "../../services/PostService";
import { Link, Navigate, useParams } from "react-router-dom";
import Pagination from "../Pagination";
import BrandService from "../../services/BrandService";
import CategoryService from "../../services/CategoryService";
const Topic = () => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(10);
  const [totalProducts, setTotalProducts] = useState(0);
  const [category, setCategory] = useState({});
  const [brands, setBrands] = useState({});
  let { slug } = useParams();
  useEffect(() => {
    (async () => {
      const result = await PostService.list();
      setPages(result.pages);
      console.log(result.pages);
    })();
  }, []);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Update URL with new page number
    Navigate(`/san-pham?page=${pageNumber}`);
  };
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
  return (
    <>
      <section className="bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <Link className="text-main" href="http://localhost:3000/">
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
              <div className="post-topic-title bg-main">
                <h3 className="fs-5 py-3 text-center">TIN TỨC</h3>
              </div>
              <div className="post-topic mt-3">
                {pages &&
                  pages.length > 0 &&
                  pages.map((topic, index) => {
                    return (
                      <div className="row post-item mb-4" key={index}>
                        <TopicItem topic={topic} />
                      </div>
                    );
                  })}
              </div>
              <div className="row">
                <div className="col-12 text-center pt-3">
                  <Pagination
                    limit={limit}
                    currentPage={currentPage}
                    url={"/bai-viet"} // Example base URL
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
