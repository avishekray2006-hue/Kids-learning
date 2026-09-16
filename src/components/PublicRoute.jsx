import { Navigate } from "react-router-dom";
import { hasValidToken } from "../services/authStorage";

function PublicRoute({ children }) {
  if (hasValidToken()) {
    return <Navigate to="/home" replace />;
  }

  return children;
}

export default PublicRoute;
