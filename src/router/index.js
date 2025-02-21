import BackendRouter from "./BackendRouter";
import FrontendRouter from "./FrontendRouter";
import RouterLogin from './RouterLogin'


const AppRouter = {
  "RouterSite": FrontendRouter,
  "RouterAdmin": BackendRouter,
  "RouterLogin":RouterLogin,
};

export default AppRouter;
