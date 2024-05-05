import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import PostService from "../../../services/PostService";

const PostDetail = () => {
  const [post, setpost] = useState({});
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await PostService.show(id);
      if (result.status === true) {
        // If result.post is an array, convert it to an object
        const postObject = Array.isArray(result.post)
          ? result.post[0]
          : result.post;
        setpost(postObject);
        console.log(result.post);
      }
    })();
  }, []);
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Chi tiết</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to={"/admin/post"} className="btn btn-primary btn-sm me-2">
              <i className="fa fa-arrow-left"></i> Về danh sách
            </Link>
            <Link
              to={`/admin/post/edit/${post.id}`}
              className="btn btn-success btn-sm"
            >
              <i className="fa fa-edit"></i> Sửa
            </Link>
          </div>
        </div>
      </section>
      <section className="content-body my-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Tên trường</th>
              <th>Giá trị</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Id</td>
              <td>{post.id}</td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>{post.title}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{post.detail}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default PostDetail;
