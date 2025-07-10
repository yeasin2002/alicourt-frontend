import { createBrowserRouter } from "react-router";

import { PrivateRoute } from "./components/shared";

import {
  ConfirmResetPasswordPage,
  LoginPage,
  ResetPasswordPage,
  SingupPage,
  VerificationPage,
} from "./page/(auth)";

import {
  CalendarPage,
  ClassesPage,
  DashboardPage,
  ProfilePage,
  SingleChatPage,
  SingleClassPage,
} from "./page/(dashboard)";

export const router = createBrowserRouter([
  {
    Component: PrivateRoute,
    children: [
      { path: "/", Component: DashboardPage },
      { path: "/chat/:id", Component: SingleChatPage },
      { path: "/calendar", Component: CalendarPage },
      { path: "/class", Component: ClassesPage },
      { path: "/class/:id", Component: SingleClassPage },
      { path: "/profile", Component: ProfilePage },
    ],
  },

  // auth pages
  { path: "/login", Component: LoginPage },
  { path: "/register", Component: SingupPage },
  { path: "/verification", Component: VerificationPage },
  { path: "/reset-password", Component: ResetPasswordPage },
  { path: "/reset-password-confirm", Component: ConfirmResetPasswordPage },
]);
