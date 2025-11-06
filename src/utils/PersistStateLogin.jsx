import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAuth } from "./hooks/useAuth";
import Loader from "../components/Loader";
import useRefreshtoken from "../screens/state/hooks/useRefreshtoken";


const PersistStateLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshtoken();
    const { stateAuth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                console.error(err);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };
        !stateAuth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>{isLoading ? <Loader /> : <Outlet />}</>
    );
};

export default PersistStateLogin;
