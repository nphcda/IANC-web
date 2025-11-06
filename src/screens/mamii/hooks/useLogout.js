import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setMamiiAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setMamiiAuth({});
    try {
      const response = await axiosInstance.get("/admin/mamii/signout", {
        withCredentials: true,
      });
      navigate("/mamii/login");
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
