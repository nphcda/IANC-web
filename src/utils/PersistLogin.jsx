import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import useRefreshtoken from "./hooks/useRefreshtoken";
import { useAuth } from "./hooks/useAuth";
import Loader from "../components/Loader";


const PersistLogin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const refresh = useRefreshtoken();
  const { auth } = useAuth();

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
    !auth?.accessToken ? verifyRefreshToken() : setIsLoading(false);
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>{isLoading ? <Loader /> : <Outlet />}</>
  );
};

export default PersistLogin;
