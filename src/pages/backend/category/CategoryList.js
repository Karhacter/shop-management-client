import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import { urlImage } from "../../../config";
import myslug from "../../Myslug";

const CategoryList = () => {
  const [categorys, setCategorys] = useState([]);
  const [insertId, setInsertId] = useState(0);
  //
  const [name, setName] = useState("");
  const [sort_order, setSort_order] = useState(null);
  const [slug, setSlug] = useState("");
  const [parent_id, setParent_id] = useState(0);
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState(1);

  useEffect(
    function () {
      (async () => {
        const result = await CategoryService.get_list();
        if (result.status === true) {
          setCategorys(result.categorys);
          console.log(result);
        }
      })();
    },
    [insertId]
  );

  const resetForm = () => {
    setName("");
    setSort_order(0);
    setSlug("");
    setParent_id(0);
    setDescription("");
    setStatus(1);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("Đã thêm sản phẩm");
    const image = document.querySelector("#image");
    const category = new FormData();
    category.append("name", name);
    category.append("parent_id", parent_id);
    category.append("slug", myslug(name));
    category.append("description", description);
    category.append("status", status);
    category.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await CategoryService.store(category);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.category.insertId);
        console.log(result);
      }
    })();
    resetForm();
  };

  const handleDelete = async (id) => {
    const result = await CategoryService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.category.insertId);
      console.log(result);
      window.location.reload();
    }
  };
  return (
    <section className="bg-light p-3">
      <div className="content-header my-2">
        <h2 className="d-inline">Danh mục</h2>
        <hr className="border-0" />
      </div>
      <div className="content-body my-2">
        <div className="row">
          <div className="col-md-4">
            <form onSubmit={handleSubmit}>
              <div className=" mb-3">
                <label>
                  <strong>Tên danh mục (*)</strong>
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Nhập tên danh mục"
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
                  <strong>Danh mục cha</strong>
                </label>
                <select
                  value={parent_id}
                  onChange={(e) => setParent_id(e.target.value)}
                  className="form-select"
                >
                  <option value="0">None</option>
                  {categorys &&
                    categorys.map((category) => {
                      if (category.parent_id === 0) {
                        return (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        );
                      }
                    })}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Chọn vị trí</strong>
                </label>
                <select
                  value={sort_order}
                  onChange={(e) => setSort_order(e.target.value)}
                  className="form-select"
                >
                  <option value="0">None</option>
                  {categorys.map((category, index) => (
                    <option key={category.id} value={category.id}>
                      Sau: {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label>
                  <strong>Hình đại diện</strong>
                </label>
                <input type="file" id="image" className="form-control" />
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
                  <th className="text-center">Hình ảnh</th>
                  <th>Tên danh mục</th>
                  <th>Tên slug</th>

                  <th className="text-center">Hành động</th>
                </tr>
              </thead>
              <tbody>
                {categorys.length > 0 &&
                  categorys.map((category, index) => {
                    return (
                      <tr className="datarow">
                        <td>
                          <img
                            className="img-fluid"
                            src={urlImage + "categorys/" + category.image}
                            alt={category.image}
                            style={{ maxWidth: "100px" }}
                          />
                        </td>
                        <td>
                          <div className="name">
                            <Link to={"/admin/category/detail/" + category.id}>
                              {category.name}
                            </Link>
                          </div>
                        </td>
                        <td>{category.slug}</td>

                        <td className="text-center">
                          <div className="function_style">
                            <Link
                              className="px-1 me-1 text-primary"
                              to={"/admin/category/edit/" + category.id}
                            >
                              <i className="btn btn btn-primary fa fa-edit"></i>
                            </Link>
                            <Link className="px-1 me-1 text-danger">
                              <i
                                className="btn btn btn-danger fa fa-trash"
                                onClick={() => handleDelete(category.id)}
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

export default CategoryList;
