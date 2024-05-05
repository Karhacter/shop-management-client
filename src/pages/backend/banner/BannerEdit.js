import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerService from "../../../services/BannerService";

const BannerEdit = () => {
  const [insertId, setInsertId] = useState(0);
  //
  const [banner, setBanner] = useState([]);

  const [name, setName] = useState("");
  const [link, setlink] = useState("");
  const [status, setStatus] = useState(0);

  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await BannerService.show(id);
      if (result.status === true) {
        // If result.banner is an array, convert it to an object
        const bannerObject = Array.isArray(result.banner)
          ? result.banner[0]
          : result.banner;
        setBanner(bannerObject);
        console.log(bannerObject);
        setName(bannerObject.name);
        setlink(bannerObject.link);
        setStatus(bannerObject.status);
      }
    })();
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const banner = new FormData();
    banner.append("name", name);
    banner.append("link", link);
    banner.append("status", status);
    banner.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await BannerService.edit(id, banner);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.banner.insertId);
        console.log(result.banner);
        // window.location.href = "/admin/banner";
      }
    })();
  };
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật banner</h1>
        <div className="text-end">
          <Link to={"/admin/banner"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>
      <form onSubmit={handleUpdate}>
        <section className="content-body my-2">
          <input name="id" value="<?= $banner->id; ?>" type="hidden" />
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên banner (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Nhập tên banner"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Liên kết</strong>
                </label>
                <input
                  type="text"
                  name="link"
                  className="form-control"
                  value={link}
                  onChange={(event) => setlink(event.target.value)}
                  placeholder="Nhập liên kết"
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
                    onChange={(event) => setStatus(event.target.value)}
                    name="status"
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
                    name="CAPNHAT"
                  >
                    <i className="fa fa-save" aria-hidden="true"></i> Đăng
                  </button>
                </div>
              </div>

              <div className="box-container mt-4 bg-white">
                <div className="box-header py-1 px-2 border-bottom">
                  <strong>Hình (*)</strong>
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

export default BannerEdit;
