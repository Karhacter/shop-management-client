import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BannerService from "../../../services/BannerService";

const BannerCreate = () => {
  const [insertId, setInsertId] = useState(0);
  //
  const [name, setName] = useState("");
  const [link, setlink] = useState("");
  const [status, setStatus] = useState(0);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const banner = new FormData();
    banner.append("name", name);
    banner.append("link", link);
    banner.append("status", status);
    banner.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await BannerService.store(banner);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.banner.insertId);
        window.location.href = "/admin/banner";
      }
    })();
  };

  return (
    <div className="maincontent bg-light p-3">
      <section className="content-header my-2">
        <h3 className="d-inline">Thêm Banner</h3>
        <div className="text-end">
          <Link to="/admin/banner" className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>

      <section className="content-body my-2">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tiêu đề bài viết (*)</strong>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Nhập tiêu đề"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Liên kết (*)</strong>
                </label>
                <input
                  value={link}
                  onChange={(e) => setlink(e.target.value)}
                  rows="7"
                  className="form-control"
                  placeholder="Nhập liên kết"
                  required
                />
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
                    <i className="fa fa-save"></i>
                    &nbsp; Đăng
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
        </form>
      </section>
    </div>
  );
};

export default BannerCreate;
