import { createBrowserRouter } from "react-router";

import { LoginPage } from "@/page/auth/login";
import { SingupPage } from "@/page/auth/register";
import { DashboardPage } from "@/page/dashboard";
import { CalendarPage } from "./page/calendar";
import { ForgotPasswordPage } from "./page/forgot-password";
import { VerificationPage } from "./page/verification";

export const router = createBrowserRouter([
  // dashboard
  { path: "/", Component: DashboardPage },
  { path: "/calendar", Component: CalendarPage },

  // auth pages
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: SingupPage },
  { path: "/verification", Component: VerificationPage },
  { path: "/forgot-password", Component: ForgotPasswordPage },
]);
