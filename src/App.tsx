import { createBrowserRouter } from "react-router";

import { LoginPage } from "@/page/auth/login";
import { SingupPage } from "@/page/auth/register";
import { DashboardPage } from "@/page/dashboard";
import { PrivateRoute } from "./components/shared";
import { CalendarPage } from "./page/calendar";
import { CreateClassPage } from "./page/create-class";
import { ProfilePage } from "./page/profile";
import { ResetPasswordPage } from "./page/reset-password";
import { ConfirmResetPasswordPage } from "./page/reset-password-confirm";
import { VerificationPage } from "./page/verification";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    ),
  },
  {
    path: "/calendar",
    element: (
      <PrivateRoute>
        <CalendarPage />
      </PrivateRoute>
    ),
  },
  { path: "/create-class", Component: CreateClassPage },
  { path: "/profile", Component: ProfilePage },

  // auth pages
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: SingupPage },
  { path: "/verification", Component: VerificationPage },
  { path: "/reset-password", Component: ResetPasswordPage },
  { path: "/reset-password-confirm", Component: ConfirmResetPasswordPage },
]);
