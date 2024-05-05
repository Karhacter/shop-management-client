import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PostService from "../../../services/PostService";
import { urlImage } from "../../../config";

const PageList = () => {
  const [pages, setPages] = useState([]);
  const [insertId, setInsertId] = useState(0);

  useEffect(() => {
    (async () => {
      const result = await PostService.list();
      setPages(result.pages);
      console.log(result.pages);
    })();
  }, [insertId]);

  const handleDelete = async (event, id) => {
    const result = await PostService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.page);
      console.log(result);
      window.location.reload();
      event.preventDefault();
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả trang đơn</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/page/create" className="btn btn-sm btn-success">
              Thêm trang đơn
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <th scope="col">Hinh</th>
            <th scope="col">Ten trang đơn</th>
            <th scope="col">Slug</th>
            <th scope="col">Hành động</th>
          </thead>
          <tbody>
            {pages &&
              pages.map((page, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={urlImage + "pages/" + page.image}
                        alt={page.title}
                        className="img-fluid"
                      />
                    </td>
                    <td>
                      <div className="name">
                        <Link to={"/admin/page/detail/" + page.id}>
                          {page.title}
                        </Link>
                      </div>
                    </td>
                    <td>{page.slug}</td>

                    <td className="text-center">
                      <div className="function_style">
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/page/edit/" + page.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={(e) => handleDelete(e, page.id)}
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
  );
};

export default PageList;
