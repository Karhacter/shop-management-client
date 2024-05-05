import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductService from "../../../services/ProductService";
import { urlImage } from "../../../config";
import CategoryService from "../../../services/CategoryService";
import BrandService from "../../../services/BrandService";

const ProductList = () => {
  const [insertId, setInsertId] = useState(0);
  //
  const [products, setProducts] = useState([]);
  const [brands, setBrands] = useState([]);
  const [categorys, setCategorys] = useState([]);
  useEffect(
    function () {
      (async () => {
        const result = await CategoryService.get_list();
        if (result.status === true) {
          setCategorys(result.categorys);
          console.log(result.categorys);
        }
      })();
    },
    [insertId]
  );

  // brand
  useEffect(
    function () {
      (async () => {
        const result = await BrandService.get_list();
        if (result.status === true) {
          setBrands(result.brands);
          console.log(result.brands);
        }
      })();
    },
    [insertId]
  );

  //product
  useEffect(() => {
    (async () => {
      const result = await ProductService.get_list();
      setProducts(result.products);
    })();
  }, []);
  const handleDelete = async (id) => {
    const result = await ProductService.remove(id);
    if (result.status === true) {
      alert(result.message);
      setInsertId(result.product.insertId);
      window.location.reload();
    }
  };

  const getCategoryName = (categoryId) => {
    const category = categorys.find((cat) => cat.id === categoryId);
    return category ? category.name : "Unknown";
  };

  const getBrandName = (brandId) => {
    const brand = brands.find((b) => b.id === brandId);
    return brand ? brand.name : "Unknown";
  };

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-6">
            <strong className="text-danger">Tất cả sản phẩm</strong>
          </div>
          <div className="col-6 text-end">
            <Link to="/admin/product/create" className="btn btn-sm btn-success">
              Thêm sản phẩm
            </Link>
          </div>
        </div>
      </div>
      <div className="card-body">
        <table className="table table-bordered table-hover table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Hinh</th>
              <th scope="col">Ten san pham</th>
              <th scope="col">Thương hiệu</th>
              <th scope="col">Thể loại</th>
              <th scope="col">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 &&
              products.map((product, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{product.id}</th>
                    <td>
                      <img
                        src={urlImage + "products/" + product.image}
                        alt={product.name}
                        className="img-fluid"
                        style={{ width: "80px" }}
                      />
                    </td>
                    <td>
                      <Link to={"/admin/product/detail/" + product.id}>
                        {product.name}
                      </Link>
                    </td>
                    <td>{getBrandName(product.brand_id)}</td>
                    <td>{getCategoryName(product.category_id)}</td>
                    <td>
                      <Link
                        className="px-1 me-1 text-primary"
                        to={"/admin/product/edit/" + product.id}
                      >
                        <i className="btn btn btn-primary fa fa-edit"></i>
                      </Link>
                      <Link className="px-1 me-1 text-danger">
                        <i
                          className="btn btn btn-danger fa fa-trash"
                          onClick={() => handleDelete(product.id)}
                        ></i>
                      </Link>
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

export default ProductList;
