import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CategoryService from "../../../services/CategoryService";

const CategoryDetail = () => {
  const [category, setcategory] = useState({});
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await CategoryService.show(id);
      if (result.status === true) {
        // If result.category is an array, convert it to an object
        const categoryObject = Array.isArray(result.category)
          ? result.category[0]
          : result.category;
        setcategory(categoryObject);
        console.log(result.category);
      }
    })();
  }, []);
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Chi tiết</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link
              to={"/admin/category"}
              className="btn btn-primary btn-sm me-2"
            >
              <i className="fa fa-arrow-left"></i> Về danh sách
            </Link>
            <Link
              to={`/admin/category/edit/${category.id}`}
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
              <td>{category.id}</td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>{category.name}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{category.description}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CategoryDetail;
