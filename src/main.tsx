import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import { initialStore } from "./store";

import { router } from "@/App";
import { RouterProvider } from "react-router";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={initialStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
