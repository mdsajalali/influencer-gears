import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <p className="py-20 text-center">Loading...</p>;
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoutes;
