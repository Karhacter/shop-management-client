import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BrandService from "../../../services/BrandService";

const BrandDetail = () => {
  const [brand, setBrand] = useState({});
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
        console.log(result.brand);
      }
    })();
  }, []);
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Chi tiết</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to={"/admin/brand"} className="btn btn-primary btn-sm me-2">
              <i className="fa fa-arrow-left"></i> Về danh sách
            </Link>
            <Link
              to={`/admin/brand/edit/${brand.id}`}
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
              <td>{brand.id}</td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>{brand.name}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{brand.description}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BrandDetail;
