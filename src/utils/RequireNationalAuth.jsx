import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireNationalAuth = () => {
    const { nationalAuth } = useAuth();
    const location = useLocation();
    // Check if the user is coming from the signin page
    const isComingFromSignin = location.state?.from?.pathname === "/national/login";
    // console.log({ access: nationalAuth?.accessToken })

    return nationalAuth?.accessToken ? (
        !isComingFromSignin ? (
            <Outlet />
        ) : (
            <Navigate to="/" replace />
        )
    ) : (
        <Navigate to="/national/login" state={{ from: location }} replace />
    );
};

export default RequireNationalAuth;
