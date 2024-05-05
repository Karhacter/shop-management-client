import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserService from "../../../services/UserService";

const UserList = () => {
  const [insertId, setInsertId] = useState(0);

  const [users, setUsers] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await UserService.get_list();
        if (result.status === true) {
          setUsers(result.users);
          console.log(result.users);
        }
      })();
    },
    [insertId]
  );

  const handleDelete = async (id) => {
    const result = await UserService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.users.insertId);
      window.location.reload();
    }
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả Tài khoản</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/user/create" className="btn btn-sm btn-success">
              Thêm Tài khoản
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <th scope="col">ID</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Điện thoại</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th className="text-center">Hành động</th>
          </thead>
          <tbody>
            {users.length > 0 &&
              users.map((user, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{user.id}</th>
                    <td>
                      <div className="name">
                        <Link href="#">{user.name}</Link>
                      </div>
                    </td>
                    <td>{user.phone}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>

                    <td className="text-center">
                      <div className="function_style">
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/user/edit/" + user.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={() => handleDelete(user.id)}
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

export default UserList;
