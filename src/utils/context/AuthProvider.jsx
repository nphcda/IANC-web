import React, { createContext, useState, useEffect } from "react";
import { axiosPrivate } from "../axios";

const AuthContext = createContext({
  auth: null,
  rememberMe: JSON.parse(localStorage.getItem("persist") ?? "true"),
  setRememberMe: () => {},
  setAuth: () => {},
});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});
  const [nationalAuth, setNationalAuth] = useState({});
  const [stateAuth, setStateAuth] = useState({});
  const [lgaAuth, setLgaAuth] = useState({});
  const [healthfacilityAuth, setHealthfacilityAuth] = useState({});
  const [mamiiAuth, setMamiiAuth] = useState({});
  const [rememberMe, setRememberMe] = useState(
    JSON.parse(localStorage.getItem("persist") ?? "true")
  );

  return (
    <AuthContext.Provider
      value={{
        auth,
        setAuth,
        nationalAuth,
        setNationalAuth,
        stateAuth,
        setStateAuth,
        lgaAuth,
        setLgaAuth,
        healthfacilityAuth,
        setHealthfacilityAuth,
        mamiiAuth,
        setMamiiAuth,
        rememberMe,
        setRememberMe,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
