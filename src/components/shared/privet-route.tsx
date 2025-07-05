import { useAppSelector } from "@/hooks/use-redux";
import { Navigate, useLocation } from "react-router";

export function PrivateRoute({ children }: { children: React.ReactNode }) {
  // Retrieve auth data from localStorage
  const location = useLocation();
  const Data = useAppSelector((state) => state.auth);

  // Check if user is not authenticated
  if (!Data.access && !Data.refresh) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Check if user is not verified
  if (!Data.isAuthenticated) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  // User meets all requirements
  return children;
}
