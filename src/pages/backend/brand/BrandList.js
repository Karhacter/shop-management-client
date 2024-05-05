import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BrandService from "../../../services/BrandService";
import { urlImage } from "../../../config";
import myslug from "../../Myslug";

const BrandList = () => {
  const [brands, setBrands] = useState([]);
  const [insertId, setInsertId] = useState(0);
  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [status, setStatus] = useState(0);

  useEffect(
    function () {
      (async () => {
        const result = await BrandService.get_list();
        if (result.status === true) {
          setBrands(result.brands);
          console.log(result);
        }
      })();
    },
    [insertId]
  );

  const resetForm = () => {
    setName("");
    setDescription("");
    setSlug("");
    setStatus(1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const brand = new FormData();
    brand.append("name", name);
    brand.append("slug", myslug(name));
    brand.append("description", description);
    brand.append("status", status);
    brand.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await BrandService.store(brand);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.brand.insertId);
        console.log(result);
      }
    })();
    resetForm();
  };

  const handleDelete = async (id) => {
    const result = await BrandService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.brand.insertId);
      window.location.reload();
    }
  };
  return (
    <section className="bg-light p-3">
      <div className="content-header my-2">
        <h2 className="d-inline">Thương hiệu</h2>
        <hr className="border-0" />
      </div>
      <div className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className=" mb-3">
                <label>
                  <strong>Tên Thương hiệu (*)</strong>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên Thương hiệu"
                  className="form-control"
                  required
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Mô tả</strong>
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Mô tả"
                  rows="4"
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3">
                <label>
                  <strong>Hình đại diện</strong>
                </label>
                <input
                  type="file"
                  id="image"
                  name="image"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label>
                  <strong>Trạng thái</strong>
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="form-select"
                >
                  <option value="1">Xuất bản</option>
                  <option value="2">Chưa xuất bản</option>
                </select>
              </div>
              <div className="mb-3 text-end">
                <button type="submit" className="btn btn-sm btn-success">
                  <i className="fa fa-save"></i> Lưu[Thêm]
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-8">
            <div className="row mt-3 align-items-center">
              <div className="col-12">
                <ul className="list-inline ">
                  <li className="list-inline-item">
                    <Link href="#" className="text-black text-decoration-none">
                      Tất cả (123)
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="text-black text-decoration-none">
                      Xuất bản (12)
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="#" className="text-black text-decoration-none">
                      Rác (12)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row my-2 mt-0 align-items-center">
              <div className="col-md-6">
                <select name="" className="d-inline me-1">
                  <option value="">Hành động</option>
                  <option value="">Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-6 text-end">
                <input type="text" className="search d-inline" />
                <button className="d-inline btnsearch ms-1">Tìm kiếm</button>
              </div>
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th className="text-center">Hình ảnh</th>
                  <th>Tên Thương hiệu</th>
                  <th>Tên slug</th>
                  <th className="text-center">Chức năng</th>
                </tr>
              </thead>
              <tbody>
                {brands.length > 0 &&
                  brands.map((brand, index) => {
                    return (
                      <tr className="datarow" key={index}>
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>
                          <img
                            className="img-fluid d-block"
                            style={{ width: "80px" }}
                            src={urlImage + "brands/" + brand.image}
                            alt={brand.image}
                          />
                        </td>
                        <td>
                          <div className="name">
                            <Link to={"/admin/brand/show/" + brand.id}>
                              {brand.name}
                            </Link>
                          </div>
                        </td>
                        <td>{brand.slug}</td>
                        <td className="text-center">
                          <div className="function_style">
                            <Link
                              className="px-1 me-1 text-primary"
                              to={"/admin/brand/edit/" + brand.id}
                            >
                              <i className="btn btn btn-primary fa fa-edit"></i>
                            </Link>
                            <Link className="px-1 me-1 text-danger">
                              <i
                                className="btn btn btn-danger fa fa-trash"
                                onClick={() => handleDelete(brand.id)}
                              ></i>
                            </Link>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandList;
