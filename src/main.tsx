import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router";

import { router } from "@/App";
import "./index.css";
import { initialStore } from "./store";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={initialStore}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </StrictMode>
);
