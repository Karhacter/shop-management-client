import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../config";

const PostList = () => {
  const [insertId, setInsertId] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(
    function () {
      (async () => {
        const result = await PostService.get_list();
        if (result.status === true) {
          setPosts(result.posts);
          console.log(result.posts);
        }
      })();
    },
    [insertId]
  );

  const handleDelete = async (id) => {
    const result = await PostService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.post.insertId);
      window.location.reload();
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả bài viết</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/post/create" className="btn btn-sm btn-success">
              Thêm bài viết
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <th scope="col">Hinh</th>
            <th scope="col">Ten bai viet</th>
            <th scope="col">Tên slug</th>
            <th scope="col">Type</th>
            <th scope="col">Hành động</th>
          </thead>
          <tbody>
            {posts.length > 0 &&
              posts.map((post, index) => {
                if (post.type === "post") {
                  return (
                    <tr className="datarow">
                      <td>
                        <img
                          className="img-fluid"
                          src={urlImage + "posts/" + post.image}
                          alt={post.image}
                        />
                      </td>
                      <td>
                        <div className="name">
                          <Link to={"/admin/post/detail/" + post.id}>
                            {post.title}
                          </Link>
                        </div>
                      </td>
                      <td>{post.slug}</td>
                      <td>{post.type}</td>
                      <td>
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/post/edit/" + post.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={() => handleDelete(post.id)}
                          ></i>
                        </Link>
                      </td>
                    </tr>
                  );
                }
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PostList;
