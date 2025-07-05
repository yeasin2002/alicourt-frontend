import { createBrowserRouter } from "react-router";

import { LoginPage } from "@/page/auth/login";
import { SingupPage } from "@/page/auth/register";
import { Homepage } from "@/page/homepage";

export const router = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: SingupPage },
]);
