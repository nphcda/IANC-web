import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Loader from "../components/Loader";
import useRefreshtoken from "../screens/national/hooks/useRefreshtoken";
import { useAuth } from "./hooks/useAuth";


const PersistNationalLogin = () => {
    const [isLoading, setIsLoading] = useState(true);
    const refresh = useRefreshtoken();
    const { nationalAuth } = useAuth();

    useEffect(() => {
        let isMounted = true;
        const verifyRefreshToken = async () => {
            try {
                await refresh();
            } catch (err) {
                return null
                // console.error(err);
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };
        !nationalAuth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <>{isLoading ? <Loader /> : <Outlet />}</>
    );
};

export default PersistNationalLogin;
