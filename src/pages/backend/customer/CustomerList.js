import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerService from "../../../services/CustomerService";
import { urlImage } from "../../../config";

const CustomerList = () => {
  const [insertId, setInsertId] = useState(0);
  const [customers, setCustomers] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await CustomerService.get_list();
        if (result.status === true) {
          setCustomers(result.customers);
          console.log(result.customers);
        }
      })();
    },
    [insertId]
  );

  const handleDelete = async (id) => {
    const result = await CustomerService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.customers);
      window.location.reload();
    }
  };
  return (
    <div className="maincontent">
      <section className="content-header my-2">
        <h1 className="d-inline">Khách hàng</h1>
        <Link to="/admin/customer/create" className="btn btn-sm btn-success">
          Thêm mới
        </Link>
        <div className="row mt-3 align-items-center">
          <div className="col-6">
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
          <div className="col-6 text-end">
            <input type="text" className="search d-inline" />
            <button className="d-inlin btnsearch">Tìm kiếm</button>
          </div>
        </div>
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
                  <Link className="page-link" href="#">
                    1
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    2
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    3
                  </Link>
                </li>
                <li className="page-item">
                  <Link className="page-link" href="#">
                    &raquo;
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="content-body my-2">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th className="text-center">ID</th>
              <th className="text-center">Hình ảnh</th>
              <th>Họ tên</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {customers.length > 0 &&
              customers.map((customer, index) => {
                return (
                  <tr key={index}>
                    <th scope="row" className="text-center">
                      {customer.id}
                    </th>
                    <td>
                      <img
                        src={urlImage + "customers/" + customer.image}
                        alt={customer.name}
                        className="img-fluid d-block"
                        style={{ width: "100px" }}
                      />
                    </td>
                    <td>
                      <div className="name">
                        <Link href="#">{customer.name}</Link>
                      </div>
                    </td>
                    <td>{customer.phone}</td>
                    <td>{customer.email}</td>
                    <td className="text-center">
                      <div className="function_style">
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/customer/edit/" + customer.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={() => handleDelete(customer.id)}
                          ></i>
                        </Link>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default CustomerList;
