import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireLgaAuth = () => {
    const { lgaAuth } = useAuth();
    const location = useLocation();
    // Check if the user is coming from the signin page
    const isComingFromSignin = location.state?.from?.pathname === "/lga/login";
    // console.log({ access: nationalAuth?.accessToken })

    return lgaAuth?.accessToken ? (
        !isComingFromSignin ? (
            <Outlet />
        ) : (
            <Navigate to="/" replace />
        )
    ) : (
        <Navigate to="/lga/login" state={{ from: location }} replace />
    );
};

export default RequireLgaAuth;
