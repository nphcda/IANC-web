import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireStateAuth = () => {
    const { stateAuth } = useAuth();
    const location = useLocation();
    // Check if the user is coming from the signin page
    const isComingFromSignin = location.state?.from?.pathname === "/state/login";

    return stateAuth?.accessToken ? (
        !isComingFromSignin ? (
            <Outlet />
        ) : (
            <Navigate to="/" replace />
        )
    ) : (
        <Navigate to="/state/login" state={{ from: location }} replace />
    );
};

export default RequireStateAuth;
