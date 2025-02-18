import { useEffect, useState } from "react";
import ProductService from "../../../../services/ProductService";
import ProductItem from "../../product/ProductItem";

const ProductPop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await ProductService.list(1, 8);
      setProducts(result.products);
    })();
  }, []);
  return (
    <div className="row row-fix mt-3">
      <div className="row">
        {products &&
          products.length > 0 &&
          products.map((product, index) => {
            return (
              <div className="col-md-3 col-6" key={index}>
                <ProductItem product={product} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPop;
