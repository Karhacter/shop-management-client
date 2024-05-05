import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ContactService from "../../../services/ContactService";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [insertId, setInsertId] = useState(0);
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await ContactService.get_list();
      setContacts(result.contacts);
      console.log(result.contacts);
    })();
  }, [insertId]);
  const handleDelete = async (id) => {
    const result = await ContactService.delete(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.contact.insertId);
    }
    window.location.reload();
  };
  return (
    <div className="maincontent">
      <section className="content-header my-2">
        <h1 className="d-inline">Liên hệ</h1>
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
            <button className="d-inline btnsearch">Tìm kiếm</button>
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
        <table className="table table-bcontacted">
          <thead>
            <tr>
              <th className="text-center">
                <input type="checkbox" id="checkboxAll" />
              </th>
              <th>Họ tên</th>
              <th>Điện thoại</th>
              <th>Email</th>
              <th>Tiêu đề</th>
              <th className="text-center">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 &&
              contacts.map((contact, index) => {
                return (
                  <tr className="datarow" key={index}>
                    <td>
                      <input type="checkbox" id="checkId" />
                    </td>
                    <td>
                      <div className="name">
                        <Link href="#">{contact.name}</Link>
                      </div>
                    </td>
                    <td>{contact.phone}</td>
                    <td>{contact.email}</td>
                    <td>{contact.title}</td>
                    <td className="text-center">
                      <div className="function_style">
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/contact/edit/" + contact.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={() => handleDelete(contact.id)}
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

export default ContactList;
