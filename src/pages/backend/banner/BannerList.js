import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BannerServices from "../../../services/BannerService";
import { urlImage } from "../../../config";

const BannerList = () => {
  const [banners, setBanners] = useState([]);
  const [insertId, setInsertId] = useState(0);
  let { id } = useParams();
  useEffect(() => {
    (async () => {
      const result = await BannerServices.get_list();
      setBanners(result.banners);
      console.log(result.banners);
    })();
  }, [insertId]);
  const handleDelete = async (id) => {
    const result = await BannerServices.delete(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.brand);
    }
    window.location.reload();
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả Banner</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/banner/create" className="btn btn-sm btn-success">
              Thêm Banner
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <th scope="col">Id</th>
            <th scope="col">Hinh</th>
            <th scope="col">Ten Banner</th>
            <th scope="col">Liên kết</th>
            <th scope="col">Vị trí</th>
            <th scope="col">Hành động</th>
          </thead>
          <tbody>
            {banners.length > 0 &&
              banners.map((banner, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{banner.id}</th>
                    <td>
                      <img
                        src={urlImage + "sliders/" + banner.image}
                        alt={banner.name}
                        className="img-fluid d-block"
                        style={{ width: "250px" }}
                      />
                    </td>
                    <td>
                      <Link to={"/admin/banner/show/" + banner.id}>
                        {banner.name}
                      </Link>
                    </td>
                    <td>{banner.link}</td>
                    <td>{banner.sort_order}</td>
                    <td className="text-center">
                      <div className="function_style">
                        <Link
                          className="px-1 me-1 text-primary"
                          to={"/admin/banner/edit/" + banner.id}
                        >
                          <i className="btn btn btn-primary fa fa-edit"></i>
                        </Link>
                        <Link className="px-1 me-1 text-danger">
                          <i
                            className="btn btn btn-danger fa fa-trash"
                            onClick={() => handleDelete(banner.id)}
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

export default BannerList;
