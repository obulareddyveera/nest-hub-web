import { createBrowserRouter } from "react-router-dom";
import NestHubApp from "./features/app/App";
import { LoginAuthPage } from "./features/auth/login-auth-page";
import AdminFeature from "./features/admin/admin-feature";
import FeaturesAuth from "./features/auth";
import AuthInterstitial from "./features/auth/interstitial";

const RouteProviderConfig = createBrowserRouter([
  {
    path: "/",
    element: <NestHubApp />,
    children: [
      {
        path: "/about",
        element: <LoginAuthPage />,
      },
    ],
  },
  {
    path: "/auth",
    element: <FeaturesAuth />,
    children: [
      {
        path: "/auth/interstitial",
        element: <AuthInterstitial />,
      },
      {
        path: "/auth/login",
        element: <LoginAuthPage />,
      },
    ],
  },
  {
    path: "/feature/admin",
    element: <AdminFeature />,
    children: [
      {
        path: "/feature/admin/login",
        element: <LoginAuthPage />,
      },
    ],
  },
]);

export default RouteProviderConfig;
