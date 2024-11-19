import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RouteProviderConfig from "./route-provider";
import BigSpinner from "./components/loaders/big-spinner";
import "./index.css";

declare global {
  interface Window {
    __ENV: {
      REACT_APP_API_URL: string;
      REACT_APP_ENV: string;
    };
  }
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      router={RouteProviderConfig}
      fallbackElement={<BigSpinner />}
    />
  </StrictMode>
);
