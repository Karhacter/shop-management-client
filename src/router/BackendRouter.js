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
  { path: "/admin", component: Dashboard },

  { path: "/admin/product", component: ProductList },
  { path: "/admin/product/create", component: ProductCreate },
  { path: "/admin/product/edit/:id", component: ProductEdit },
  { path: "/admin/product/detail/:id", component: ProductDetail },

  { path: "/admin/category", component: CategoryList },
  { path: "/admin/category/edit/:id", component: CategoryEdit },
  { path: "/admin/category/detail/:id", component: CategoryDetail },

  { path: "/admin/brand", component: BrandList },
  { path: "/admin/brand/edit/:id", component: BrandEdit },
  { path: "/admin/brand/show/:id", component: BrandDetail },

  { path: "/admin/user", component: UserList },
  { path: "/admin/user/create", component: UserCreate },
  { path: "/admin/user/edit/:id", component: UserEdit },

  { path: "/admin/post", component: PostList },
  { path: "/admin/post/create", component: PostCreate },
  { path: "/admin/post/edit/:id", component: PostEdit },
  { path: "/admin/post/detail/:id", component: PostDetail },

  { path: "/admin/topic", component: TopicList },

  { path: "/admin/page/create", component: PageCreate },
  { path: "/admin/page", component: PageList },
  { path: "/admin/page/edit/:id", component: PageEdit },
  { path: "/admin/page/detail/:id", component: PageDetail },

  { path: "/admin/banner", component: BannerList },
  { path: "/admin/banner/create", component: BannerCreate },
  { path: "/admin/banner/show/:id", component: BannerDetail },
  { path: "/admin/banner/edit/:id", component: BannerEdit },

  { path: "/admin/order", component: OrderList },

  { path: "/admin/customer", component: CustomerList },
  { path: "/admin/customer/edit/:id", component: CustomerEdit },
  { path: "/admin/customer/create", component: CustomerCreate },

  { path: "/admin/menu", component: MenuList },
  { path: "/admin/menu/edit/:id", component: MenuEdit },

  { path: "/admin/contact", component: ContactList },
];

export default BackendRouter;
