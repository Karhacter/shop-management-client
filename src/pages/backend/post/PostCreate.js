import { useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";

const PostCreate = () => {
  const [insertId, setInsertId] = useState(0);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [detail, setDetail] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("post");
  const [status, setStatus] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const post = new FormData();
    post.append("title", title);
    post.append("detail", detail);
    post.append("slug", slug);
    post.append("description", description);
    post.append("type", type);
    post.append("status", status);
    post.append("image", image.files.length === 0 ? "" : image.files[0]);
    (async () => {
      const result = await PostService.store(post);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.post.insertId);
        console.log(result);
        window.location.href = "/admin/post";
      }
    })();
  };
  return (
    <div className="container bg-light p-3">
      <section className="content-header my-2">
        <h3 className="d-inline">Thêm bài viết</h3>
        <div className="text-end">
          <Link to="/admin/post" className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <section className="content-body my-2">
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tiêu đề bài viết (*)</strong>
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="form-control"
                  placeholder="Nhập tiêu đề"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>SLug (*)</strong>
                </label>
                <input
                  type="text"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                  placeholder="Nhập slug"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chi tiết (*)</strong>
                </label>
                <textarea
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  rows="7"
                  className="form-control"
                  placeholder="Nhập chi tiết"
                ></textarea>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả (*)</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows="4"
                  className="form-control"
                  placeholder="Mô tả"
                ></textarea>
              </div>
            </div>

            <div className="col-md-3">
              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Đăng</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <p>Chọn trạng thái đăng</p>
                  <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="form-select"
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
                <div className="box-footer text-end px-2 py-3">
                  <button
                    type="submit"
                    className="btn btn-success btn-sm text-end"
                  >
                    <i className="fa fa-save" aria-hidden="true"></i>
                    Đăng
                  </button>
                </div>
              </div>
              <div className="box-container mt-2 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình đại diện</strong>
                </div>
                <div className="box-body p-2 border-bottom">
                  <input type="file" id="image" className="form-control" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
    </div>
  );
};

export default PostCreate;
