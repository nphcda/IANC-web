import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useLogout = () => {
  const { setStateAuth } = useAuth();
  const logout = async () => {
    setStateAuth({});
    try {
      const response = await axiosInstance.get("/admin/state/signout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
