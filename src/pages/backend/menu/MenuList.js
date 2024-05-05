import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import MenuService from "../../../services/MenuService";

const MenuList = () => {
  const [menus, setMenus] = useState([]);

  useEffect(function () {
    (async () => {
      const result = await MenuService.get_list();
      if (result.status === true) {
        setMenus(result.menus);
        console.log(result);
      }
    })();
  }, []);

  return (
    <div className="container">
      <section className="content-header my-2 pb-4">
        <h1 className="d-inline">Quản Lý Menu</h1>
      </section>
      <section className="content-body my-2">
        <div className="row">
          <div className="col-md-3">
            <ul className="list-group">
              <li className="list-group-item mb-2">
                <select name="postion" className="form-control">
                  <option value="mainmenu">Main Menu</option>
                  <option value="footermenu">Footer Menu</option>
                </select>
              </li>
              <li className="list-group-item mb-2 border">
                <Link
                  className="d-block"
                  to="#multiCollapseCategory"
                  data-bs-toggle="collapse"
                >
                  Danh mục sản phẩm
                </Link>
                <div
                  className="collapse multi-collapse border-top mt-2"
                  id="multiCollapseCategory"
                >
                  <div className="form-check">
                    <input
                      name="categoryid[]"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="categoryid"
                    />
                    <label className="form-check-label" for="categoryid">
                      Default checkbox
                    </label>
                  </div>
                  <div className="my-3">
                    <button
                      name="ADDCATEGORY"
                      type="submit"
                      className="btn btn-sm btn-success form-control"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-2 border">
                <Link
                  className="d-block"
                  to="#multiCollapsemenu"
                  data-bs-toggle="collapse"
                >
                  Thương hiệu
                </Link>
                <div
                  className="collapse multi-collapse border-top mt-2"
                  id="multiCollapsemenu"
                >
                  <div className="form-check">
                    <input
                      name="menuid[]"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="menuid"
                    />
                    <label className="form-check-label" for="menuid">
                      Default checkbox
                    </label>
                  </div>
                  <div className="my-3">
                    <button
                      name="ADDmenu"
                      type="submit"
                      className="btn btn-sm btn-success form-control"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-2 border">
                <Link
                  className="d-block"
                  to="#multiCollapseTopic"
                  data-bs-toggle="collapse"
                >
                  Chủ đề bài viết
                </Link>
                <div
                  className="collapse multi-collapse border-top mt-2"
                  id="multiCollapseTopic"
                >
                  <div className="form-check">
                    <input
                      name="topicid[]"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="topicid"
                    />
                    <label className="form-check-label" for="topicid">
                      Default checkbox
                    </label>
                  </div>
                  <div className="my-3">
                    <button
                      name="ADDTOPIC"
                      type="submit"
                      className="btn btn-sm btn-success form-control"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-2 border">
                <Link
                  className="d-block"
                  to="#multiCollapsePage"
                  data-bs-toggle="collapse"
                >
                  Trang đơn
                </Link>
                <div
                  className="collapse multi-collapse border-top mt-2"
                  id="multiCollapsePage"
                >
                  <div className="form-check">
                    <input
                      name="pageid[]"
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="pageid"
                    />
                    <label className="form-check-label" for="pageid">
                      Default checkbox
                    </label>
                  </div>
                  <div className="my-3">
                    <button
                      name="ADDPAGE"
                      type="submit"
                      className="btn btn-sm btn-success form-control"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </li>
              <li className="list-group-item mb-2 border">
                <Link
                  className="d-block"
                  to="#multiCollapseCustom"
                  data-bs-toggle="collapse"
                >
                  Tùy biến liên kết
                </Link>
                <div
                  className="collapse multi-collapse border-top mt-2"
                  id="multiCollapseCustom"
                >
                  <div className="mb-3">
                    <label>Tên menu</label>
                    <input type="text" name="name" className="form-control" />
                  </div>
                  <div className="mb-3">
                    <label>Liên kết</label>
                    <input type="text" name="link" className="form-control" />
                  </div>
                  <div className="my-3">
                    <button
                      name="ADDCUSTOM"
                      type="submit"
                      className="btn btn-sm btn-success form-control"
                    >
                      Thêm
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-md-9">
            <div className="row mt-1 align-items-center">
              <div className="col-md-8">
                <select name="" className="d-inline me-1">
                  <option value="">Hành động</option>
                  <option value="">Bỏ vào thùng rác</option>
                </select>
                <button className="btnapply">Áp dụng</button>
              </div>
              <div className="col-md-4 text-end">
                <nav aria-label="Page navigation example">
                  <ul className="pagination pagination-sm justify-content-end">
                    <li className="page-item disabled">
                      <Link className="page-link">&laquo;</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        2
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" to="#">
                        &raquo;
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>

            <table className="table table-bordered">
              <thead>
                <tr>
                  <th className="text-center">
                    <input type="checkbox" id="checkboxAll" />
                  </th>
                  <th>Tên menu</th>
                  <th>Liên kết</th>
                  <th>Vị trí</th>
                  <th className="text-center">ID</th>
                </tr>
              </thead>
              <tbody>
                {menus &&
                  menus.map((menu, index) => {
                    return (
                      <tr className="datarow">
                        <td className="text-center">
                          <input type="checkbox" />
                        </td>
                        <td>{menu.name}</td>
                        <td>
                          <div className="name">
                            <Link to="index.php?opt=menu&cat=edit&id=<?= $menu->id; ?>">
                              {menu.link}
                            </Link>
                          </div>
                        </td>
                        <td>{menu.position}</td>
                        <td className="text-center">{menu.id}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MenuList;
