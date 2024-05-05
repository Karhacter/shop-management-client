import { useEffect, useState } from "react";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../config";
import { Link } from "react-router-dom";

const ModLast = () => {
  const [posts, setPosts] = useState([]);
  const [limit, setLimit] = useState(4);
  useEffect(() => {
    (async () => {
      const result = await PostService.listnew(limit);
      setPosts(result.posts);
      console.log(result.posts);
    })();
  }, [limit]);

  return (
    <section className="hdl-lastpost bg-main mt-3 py-4 border-top ">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            <h3>BÀI VIẾT MỚI</h3>
            <div className="row">
              <div className="col-md-6">
                <Link href="post_detail.html">
                  <img
                    className="img-fluid"
                    src="http://localhost/TranDucKhanh_2122110588_PHP/public/images/post/post-3.jpg"
                  />
                </Link>
                <h3 className="post-title fs-4 py-2">
                  <Link href="post_detail.html">
                    Lễ hội Đường sách Tết sẽ có lì xì sách
                  </Link>
                </h3>
                <p className="fs-5">
                  Tiếp nối thành công sau 13 năm tổ chức, Lễ hội Đường sách tết
                  Giáp Thìn năm 2024 tại TP.HCM với chủ đề 'Xuân yêu thương -
                  Tết sum vầy' sẽ có 52 hoạt động, trong đó có nhiều chương
                  trình chưa từng có..
                </p>
              </div>
              {posts &&
                posts.length > 0 &&
                posts.map((post) => {
                  return (
                    <div className="col-md-6">
                      <div className="row mb-3">
                        <div className="col-md-4">
                          <Link href="post_detail.html">
                            <img
                              className="img-fluid d-block w-100"
                              src={urlImage + "posts/" + post.image}
                            />
                          </Link>
                        </div>
                        <div className="col-md-8">
                          <h3 className="post-title fs-5">
                            <Link to={"/bai-viet/" + post.slug}>
                              {post.title}
                            </Link>
                          </h3>
                          <p className="fs-5">
                            {post.detail.substring(0, 200)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModLast;
