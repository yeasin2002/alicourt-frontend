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
  ChatPage,
  CreateClassPage,
  ProfilePage,
} from "./page/(dashboard)";

export const router = createBrowserRouter([
  {
    Component: PrivateRoute,
    children: [
      { path: "/", Component: ChatPage },
      { path: "/calendar", Component: CalendarPage },
      { path: "/create-class", Component: CreateClassPage },
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
