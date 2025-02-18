import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import PageCategory from "../pages/frontend/PageCategory";
import { Product,ProductDetail,ProductCategory,ProductBrand } from "../pages/frontend/product/";
import {Topic,TopicDetail} from "../pages/frontend/topic/";


const FrontendRouter = [
  { path: "/", element: <Home/> },
  { path: "/san-pham", element: <Product/> },
  { path: "/san-pham/:slug", element: <ProductDetail/> },
  { path: "/lien-he", element: <Contact/> },
  { path: "/:slug", element: <PageCategory /> },
  { path: "/bai-viet", element: <Topic /> },
  { path: "/bai-viet/:slug", element: <TopicDetail /> },
  { path: "/san-pham/the-loai/:slug", element: <ProductCategory/> },
  { path: "/san-pham/nha-xuat-ban/:slug", element: <ProductBrand/> },
];

export default FrontendRouter;
