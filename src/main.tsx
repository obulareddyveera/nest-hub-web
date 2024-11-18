import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import RouteProviderConfig from "./route-provider";
import BigSpinner from "./components/loaders/big-spinner";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider
      router={RouteProviderConfig}
      fallbackElement={<BigSpinner />}
    />
  </StrictMode>
);
