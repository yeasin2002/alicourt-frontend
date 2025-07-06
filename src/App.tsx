import { createBrowserRouter } from "react-router";

import { LoginPage } from "@/page/auth/login";
import { SingupPage } from "@/page/auth/register";
import { Homepage } from "@/page/homepage";
import { CalendarPage } from "./page/calendar";
import { ForgotPasswordPage } from "./page/forgot-password";
import { VerificationPage } from "./page/verification";

export const router = createBrowserRouter([
  { path: "/", Component: Homepage },
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: SingupPage },
  { path: "/verification", Component: VerificationPage },
  { path: "/forgot-password", Component: ForgotPasswordPage },
  { path: "/calendar", Component: CalendarPage },
]);
