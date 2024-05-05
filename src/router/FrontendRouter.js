import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import PageCategory from "../pages/frontend/PageCategory";
import Topic from "../pages/frontend/Topic";
import Product from "../pages/frontend/Product";
import ProductDetail from "../pages/frontend/ProductDetail";
import TopicDetail from "../pages/frontend/TopicDetail";
import ProductCategory from "../pages/frontend/ProductCategory";
import ProductBrand from "../pages/frontend/ProductBrand";

const FrontendRouter = [
  { path: "/", component: Home },
  { path: "/san-pham", component: Product },
  { path: "/san-pham/:slug", component: ProductDetail },
  { path: "/lien-he", component: Contact },
  { path: "/:slug", component: PageCategory },
  { path: "/bai-viet", component: Topic },
  { path: "/bai-viet/:slug", component: TopicDetail },
  { path: "/san-pham/the-loai/:slug", component: ProductCategory },
  { path: "/san-pham/nha-xuat-ban/:slug", component: ProductBrand },
];

export default FrontendRouter;
