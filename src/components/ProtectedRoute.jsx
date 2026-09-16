import { Navigate } from "react-router-dom";
import { hasValidToken } from "../services/authStorage";

function ProtectedRoute({ children }) {
  if (!hasValidToken()) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectedRoute;
