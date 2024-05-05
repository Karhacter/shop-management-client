import { Link } from "react-router-dom";
import { urlImage } from "../../../../config";
import { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import NewProductItem from "./NewProductItem";

const NewProduct = () => {
  const [limit, setLimit] = useState(4);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ProductService.listnew(limit);
      setProducts(result.products);
      console.log(result.products);
    })();
  }, [limit]);
  return (
    <div className="">
      <div className="row">
        {products &&
          products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="col-6 col-md-3 mb-4col">
                <NewProductItem key={index} product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default NewProduct;
