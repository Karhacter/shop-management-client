import {
  ProductList,
  ProductCreate,
  ProductEdit,
  ProductDetail,
} from "../pages/backend/product";
import {
  CustomerList,
  CustomerEdit,
  CustomerCreate,
} from "../pages/backend/customer";
import { UserList, UserCreate, UserEdit } from "../pages/backend/user";
import { BrandList, BrandEdit, BrandDetail } from "../pages/backend/brand";

import {
  CategoryList,
  CategoryDetail,
  CategoryEdit,
} from "../pages/backend/category";

import {
  PostList,
  PostCreate,
  PostEdit,
  PostDetail,
} from "../pages/backend/post";
import {
  PageCreate,
  PageDetail,
  PageEdit,
  PageList,
} from "../pages/backend/page";
import {
  BannerList,
  BannerCreate,
  BannerDetail,
  BannerEdit,
} from "../pages/backend/banner";

import TopicList from "../pages/backend/topic/TopicList";
import OrderList from "../pages/backend/order/OrderList";
import ContactList from "../pages/backend/contact/ContactList";

import Dashboard from "../pages/backend/Dashboard";
import { MenuEdit, MenuList } from "../pages/backend/menu";

const BackendRouter = [
  { path: "/admin", element: <Dashboard /> },

  { path: "/admin/product", element: <ProductList /> },
  { path: "/admin/product/create", element: <ProductCreate /> },
  { path: "/admin/product/edit/:id", element: <ProductEdit /> },
  { path: "/admin/product/detail/:id", element: <ProductDetail /> },
  
  { path: "/admin/category", element: <CategoryList /> },
  { path: "/admin/category/edit/:id", element: <CategoryEdit /> },
  { path: "/admin/category/detail/:id", element: <CategoryDetail /> },
  
  { path: "/admin/brand", element: <BrandList /> },
  { path: "/admin/brand/edit/:id", element: <BrandEdit /> },
  { path: "/admin/brand/show/:id", element: <BrandDetail /> },
  
  { path: "/admin/user", element: <UserList /> },
  { path: "/admin/user/create", element: <UserCreate /> },
  { path: "/admin/user/edit/:id", element: <UserEdit /> },
  
  { path: "/admin/post", element: <PostList /> },
  { path: "/admin/post/create", element: <PostCreate /> },
  { path: "/admin/post/edit/:id", element: <PostEdit /> },
  { path: "/admin/post/detail/:id", element: <PostDetail /> },
  
  { path: "/admin/topic", element: <TopicList /> },
  
  { path: "/admin/page/create", element: <PageCreate /> },
  { path: "/admin/page", element: <PageList /> },
  { path: "/admin/page/edit/:id", element: <PageEdit /> },
  { path: "/admin/page/detail/:id", element: <PageDetail /> },
  
  { path: "/admin/banner", element: <BannerList /> },
  { path: "/admin/banner/create", element: <BannerCreate /> },
  { path: "/admin/banner/show/:id", element: <BannerDetail /> },
  { path: "/admin/banner/edit/:id", element: <BannerEdit /> },
  
  { path: "/admin/order", element: <OrderList /> },
  
  { path: "/admin/customer", element: <CustomerList /> },
  { path: "/admin/customer/edit/:id", element: <CustomerEdit /> },
  { path: "/admin/customer/create", element: <CustomerCreate /> },
  
  { path: "/admin/menu", element: <MenuList /> },
  { path: "/admin/menu/edit/:id", element: <MenuEdit /> },
  
  { path: "/admin/contact", element: <ContactList /> }
];

export default BackendRouter;
