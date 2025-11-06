import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";

const RequireIsSignedIn = () => {
    const { auth } = useAuth();


    return !auth?.accessToken ? <Outlet /> : <Navigate to="/" replace />;
};

export default RequireIsSignedIn;
