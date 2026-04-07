import { Navigate } from "react-router-dom";

/**
 * Simulated route protection.
 * Checks localStorage for a simple auth flag set during login.
 * NOTE: This is UX-only protection, NOT real security.
 * Real security requires server-side authentication.
 */
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated = localStorage.getItem("fluent-future-auth") === "true";

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
