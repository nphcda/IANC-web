import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireHealthfacilityAuth = () => {
    const { healthfacilityAuth } = useAuth();
    const location = useLocation();
    // Check if the user is coming from the signin page
    const isComingFromSignin = location.state?.from?.pathname === "/healthfacility/login";
    // console.log({ access: nationalAuth?.accessToken })

    return healthfacilityAuth?.accessToken ? (
        !isComingFromSignin ? (
            <Outlet />
        ) : (
            <Navigate to="/" replace />
        )
    ) : (
        <Navigate to="/healthfacility/login" state={{ from: location }} replace />
    );
};

export default RequireHealthfacilityAuth;
