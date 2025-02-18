import { useEffect, useState } from "react";
import PostService from "../../../services/PostService";
import { Link, useParams } from "react-router-dom";
import TopicItem from "./TopicItem";

const TopicDetail = () => {
  let { slug } = useParams();
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await PostService.detail(slug, 4);
      setPost(result.post);
      setPosts(result.posts);
      console.log(result.post);
    })();
  }, [slug]);
  return (
    <>
      <section class="bg-light">
        <div class="container">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb py-2 my-0">
              <li class="breadcrumb-item">
                <Link class="text-main" href="http://localhost:3000/">
                  Trang chủ
                </Link>
              </li>
              <li class="breadcrumb-item active" aria-current="page">
                Chi tiết bài viết
              </li>
            </ol>
          </nav>
        </div>
      </section>

      <section class="hdl-maincontent py-2">
        <div class="container">
          <div class="row">
            <div class="col-md-3 order-2 order-md-1">
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Thể loại</li>

                <li className="list-group-item">
                  <Link href="index.php?opt=product&cat=<?= $category->slug ?>">
                    Light novel
                  </Link>
                </li>
              </ul>
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Thể loại</li>

                <li className="list-group-item">
                  <Link href="index.php?opt=product&cat=<?= $category->slug ?>">
                    Light novel
                  </Link>
                </li>
              </ul>
              <ul className="list-group mb-3 list-category">
                <li className="list-group-item bg-main py-3"> Nhà xuất bản</li>

                <li className="list-group-item">
                  <Link href="index.php?opt=product&cat=<?= $category->slug ?>">
                    Light novel
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-9 order-1 order-md-2">
              <h1 class="fs-2 text-main">{post.title}</h1>
              <p>{post.detail}</p>
              <h3 class="fs-4 text-main">
                <strong>Bài viết khác</strong>
              </h3>
              <ul class="post-list-other">
                <li>
                  {posts &&
                    posts.length > 0 &&
                    posts.map((topic, index) => {
                      return (
                        <div className="row post-item mb-4" key={index}>
                          <TopicItem topic={topic} />
                        </div>
                      );
                    })}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopicDetail;
