import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ProductService from "../../../services/ProductService";

const ProductDetail = () => {
  const [product, setproduct] = useState({});
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await ProductService.show(id);
      if (result.status === true) {
        // If result.product is an array, convert it to an object
        const productObject = Array.isArray(result.product)
          ? result.product[0]
          : result.product;
        setproduct(productObject);
        console.log(result.product);
      }
    })();
  }, []);
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Chi tiết</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to={"/admin/product"} className="btn btn-primary btn-sm me-2">
              <i className="fa fa-arrow-left"></i> Về danh sách
            </Link>
            <Link
              to={`/admin/product/edit/${product.id}`}
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
              <td>{product.id}</td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>{product.name}</td>
            </tr>
            <tr>
              <td>Slug</td>
              <td>{product.slug}</td>
            </tr>
            <tr>
              <td>Mô tả</td>
              <td>{product.detail}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default ProductDetail;
