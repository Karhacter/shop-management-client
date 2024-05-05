import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerService from "../../../services/BannerService";

const BannerDetail = () => {
  const [banner, setBanner] = useState({});
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await BannerService.show(id);
      if (result.status === true) {
        const bannerObject = Array.isArray(result.banner)
          ? result.banner[0]
          : result.banner;
        setBanner(bannerObject);
        console.log(result.banner);
      }
    })();
  }, []);
  return (
    <div className="container">
      <section className="content-header my-2">
        <h1 className="d-inline">Chi tiết</h1>
        <div className="row mt-2 align-items-center">
          <div className="col-md-12 text-end">
            <Link to={"/admin/banner"} className="btn btn-primary btn-sm me-2">
              <i className="fa fa-arrow-left"></i> Về danh sách
            </Link>
            <Link
              to={`/admin/banner/edit/${banner.id}`}
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
              <td>{banner.id}</td>
            </tr>
            <tr>
              <td>Tên</td>
              <td>{banner.name}</td>
            </tr>
            <tr>
              <td>Link</td>
              <td>{banner.link}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default BannerDetail;
