import Contact from "../pages/frontend/Contact";
import Home from "../pages/frontend/Home";
import PageCategory from "../pages/frontend/PageCategory";
import {
  Product,
  ProductDetail,
  ProductCategory,
  ProductBrand,
} from "../pages/frontend/product/";
import { Topic, TopicDetail } from "../pages/frontend/topic/";
import Login from "../pages/frontend/account/LoginForm";
import Profile from "../pages/frontend/account/profile";
import RegisterForm from "../pages/frontend/account/RegisterForm";
import Cart from "../pages/frontend/cart/Cart";
import Checkout from "../pages/frontend/cart/Checkout";
import Thankyou from "../pages/frontend/cart/Thanks";

const FrontendRouter = [
  { path: "/home", element: <Home /> },
  // product
  { path: "/home/product-all", element: <Product /> },
  { path: "/home/product/:slug", element: <ProductDetail /> },

  // route contact
  { path: "/home/contact", element: <Contact /> },

  { path: "/home/:slug", element: <PageCategory /> },

  // route blog
  { path: "/home/blog-all", element: <Topic /> },
  { path: "/home/blog/:slug", element: <TopicDetail /> },

  { path: "/home/product/category/:slug", element: <ProductCategory /> },
  { path: "/home/product/brand/:slug", element: <ProductBrand /> },

  // accout
  { path: "/home/cart", element: <Cart /> },
  { path: "/home/checkout", element: <Checkout /> },
  { path: "/home/thanks", element: <Thankyou /> },
  { path: "/home/login", element: <Login /> },
  { path: "/home/register", element: <RegisterForm /> },
  { path: "/home/profile", element: <Profile /> },
];

export default FrontendRouter;
