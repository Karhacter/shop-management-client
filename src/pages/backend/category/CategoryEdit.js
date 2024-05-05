import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";
import myslug from "../../Myslug";

const CategoryEdit = () => {
  const [category, setCategory] = useState({});

  const [categorys, setCategorys] = useState([]);
  const [insertId, setInsertId] = useState(0);
  //
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [parent_id, setParent_id] = useState(0);
  const [status, setStatus] = useState(1);
  let { id } = useParams();

  useEffect(() => {
    (async () => {
      const results = await CategoryService.get_list();
      if (results.status === true) {
        setCategorys(results.categorys);
        console.log(results);
      }
      const result = await CategoryService.show(id);
      if (result.status === true) {
        // If result.category is an array, convert it to an object
        const categoryObject = Array.isArray(result.category)
          ? result.category[0]
          : result.category;
        setCategory(categoryObject);
        console.log(categoryObject);
        setName(categoryObject.name);
        setSlug(categoryObject.slug);
        setDescription(categoryObject.description);
        setStatus(categoryObject.status);
        setParent_id(categoryObject.parent_id);
      }
    })();
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const image = document.querySelector("#image");
    const category = new FormData();
    category.append("name", name);
    category.append("slug", myslug(name));
    category.append("description", description);
    category.append("parent_id", parent_id);
    category.append("status", status);
    category.append("image", image.files.length === 0 ? "" : image.files[0]);

    (async () => {
      const result = await CategoryService.edit(id, category);
      if (result.status === true) {
        alert(result.message);
        setInsertId(result.category.insertId);
        window.location.href = "/admin/category";
      }
    })();
  };

  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Cập nhật Danh mục</h1>
        <div className="text-end">
          <Link to={"/admin/category"} className="btn btn-sm btn-success">
            <i className="fa fa-arrow-left"></i> Về danh sách
          </Link>
        </div>
      </section>
      <form onSubmit={handleUpdate}>
        <section className="content-body my-2">
          <input name="id" value="<?= $category->id; ?>" type="hidden" />
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
                  rows={10}
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

export default CategoryEdit;
