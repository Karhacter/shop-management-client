import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";
import myslug from "../../Myslug";

const BrandEdit = () => {
  const [brand, setBrand] = useState({});
  const [insertId, setInsertId] = useState(0);
  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const result = await BrandService.show(id);
      if (result.status === true) {
        // If result.brand is an array, convert it to an object
        const brandObject = Array.isArray(result.brand)
          ? result.brand[0]
          : result.brand;
        setBrand(brandObject);
        console.log(brandObject);
        setName(brandObject.name);
        setSlug(brandObject.slug);
        setDescription(brandObject.description);
        setStatus(brandObject.status);
      }
    })();
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const image = document.querySelector("#image");
    const brand = new FormData();
    brand.append("name", name);
    brand.append("slug", myslug(name));
    brand.append("description", description);
    brand.append("status", status);
    brand.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await BrandService.edit(id, brand);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.brand.insertId);
        window.location.href = "/admin/brand";
      }
    })();
  };

  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật thương hiệu</h1>
        <div className="text-end">
          <Link to={"/admin/brand"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>
      <form onSubmit={handleUpdate}>
        <section className="content-body my-2">
          <input name="id" value="<?= $brand->id; ?>" type="hidden" />
          <div className="row">
            <div className="col-md-9">
              <div className="mb-3">
                <label>
                  <strong>Tên thương hiệu (*)</strong>
                </label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Slug</strong>
                </label>
                <input
                  type="text"
                  name="slug"
                  value={myslug(name)}
                  onChange={(e) => setSlug(e.target.value)}
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  name="description"
                  className="form-control"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                    name="status"
                    className="form-control"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="1">Xuất bản</option>
                    <option value="2">Chưa xuất bản</option>
                  </select>
                </div>
                <div className="box-footer text-end px-2 py-3">
                  <button type="submit" className="btn btn-sm btn-success">
                    <i className="fa fa-save" aria-hidden="true"></i> Cập nhật
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

export default BrandEdit;
