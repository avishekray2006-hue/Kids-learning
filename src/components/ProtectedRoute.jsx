import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  // Login nahi hai
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // Login hai
  return children;
}

export default ProtectedRoute;