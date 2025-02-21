import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import PageCategory from "../pages/frontend/PageCategory";
import { Product,ProductDetail,ProductCategory,ProductBrand } from "../pages/frontend/product/";
import {Topic,TopicDetail} from "../pages/frontend/topic/";
import Login from "../pages/frontend/account/LoginForm";
import Profile from "../pages/frontend/account/profile";
import RegisterForm from "../pages/frontend/account/RegisterForm";

const FrontendRouter = [
  { path: "/home", element: <Home/> },
  { path: "/home/product-all", element: <Product/> },
  { path: "/home/product/:slug", element: <ProductDetail/> },
  { path: "/home/contact", element: <Contact/> },
  { path: "/home/:slug", element: <PageCategory /> },
  { path: "/home/blog-all", element: <Topic /> },
  { path: "/home/blog/:slug", element: <TopicDetail /> },
  { path: "/home/product/category/:slug", element: <ProductCategory/> },
  { path: "/home/product/brand/:slug", element: <ProductBrand/> },
  { path: "/home/login", element: <Login />},
  { path: "/home/register", element: <RegisterForm />},
  {path: "/home/profile",element:<Profile/>,}
];

export default FrontendRouter;
