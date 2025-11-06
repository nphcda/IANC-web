import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireAdminAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  console.log(location);

  return auth?.accessToken && auth?.others?.isAdmin === true ? (
    <Outlet />
  ) : (
    <Navigate to="/signin" state={{ from: location }} replace />
  );
};

export default RequireAdminAuth;
