import { useEffect, useState } from "react";
import PostService from "../../services/PostService";
import { Link, useParams } from "react-router-dom";

const Page = () => {
  const [post, setPost] = useState([]);
  let { slug } = useParams();
  useEffect(() => {
    (async () => {
      const result = await PostService.detail(slug, 4);
      setPost(result.post);
      console.log(result.post);
    })();
  }, [slug]);

  return (
    <>
      <section className="bg-light">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb py-2 my-0">
              <li className="breadcrumb-item">
                <Link className="text-main" to="http://localhost:3000/">
                  Trang chủ
                </Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Trang đơn
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section className="hdl-maincontent py-2">
        <div className="container">
          <div className="row">
            <div className="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-page">
                <li className="list-group-item bg-main py-3">Các trang khác</li>
                <li className="list-group-item">
                  <Link
                    to="http://localhost:3000/home/chinh-sach-hoan-tien"
                    className="text-decoration-none"
                  >
                    Chính sách mua hàng
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="http://localhost:3000/home/chinh-sach-van-chuyen"
                    className="text-decoration-none"
                  >
                    Chính sách vận chuyển
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="http://localhost:3000/home/chinh-sach-doi-hang"
                    className="text-decoration-none"
                  >
                    Chính sách đổi trả
                  </Link>
                </li>
                <li className="list-group-item">
                  <Link
                    to="http://localhost:3000/home/chinh-sach-bao-hanh"
                    className="text-decoration-none"
                  >
                    Chính sách bảo hành
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-9 order-1 order-md-2">
              <h1 className="fs-2 text-main">{post.title}</h1>
              <p>{post.detail}</p>
              <img alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
