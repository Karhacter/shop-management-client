import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import PageCategory from "../pages/frontend/PageCategory";
import { Product,ProductDetail,ProductCategory,ProductBrand } from "../pages/frontend/product/";
import {Topic,TopicDetail} from "../pages/frontend/topic/";
import Login from "../pages/frontend/account/LoginForm";
import Profile from "../pages/frontend/account/profile";

const FrontendRouter = [
  { path: "/home", element: <Home/> },
  { path: "/home/san-pham", element: <Product/> },
  { path: "/home/san-pham/:slug", element: <ProductDetail/> },
  { path: "/home/lien-he", element: <Contact/> },
  { path: "/home/:slug", element: <PageCategory /> },
  { path: "/home/bai-viet", element: <Topic /> },
  { path: "/home/bai-viet/:slug", element: <TopicDetail /> },
  { path: "/home/san-pham/the-loai/:slug", element: <ProductCategory/> },
  { path: "/home/san-pham/nha-xuat-ban/:slug", element: <ProductBrand/> },
  { path: "/home/dang-nhap", element: <Login />},
  {path: "/home/profile",element:<Profile/>,}
];

export default FrontendRouter;
