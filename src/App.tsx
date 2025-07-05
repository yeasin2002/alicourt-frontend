import { createBrowserRouter } from "react-router";
import { LoginPage } from "./page/auth";
import { Homepage } from "./page/homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Homepage,
    // children: [{}],
  },
  {
    path: "/login",
    Component: LoginPage,
  },
]);
