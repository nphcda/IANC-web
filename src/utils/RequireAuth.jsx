import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireAuth = () => {
  const { auth } = useAuth();
  const location = useLocation();
  // Check if the user is coming from the signin page
  const isComingFromSignin = location.state?.from?.pathname === "/user/login";
  console.log({ access: auth?.accessToken })

  return auth?.accessToken ? (
    !isComingFromSignin ? (
      <Outlet />
    ) : (
      <Navigate to="/" replace />
    )
  ) : (
    <Navigate to="/user/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
