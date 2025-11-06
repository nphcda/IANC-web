import React from "react";
import axiosInstance from "../axios";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    setAuth({});
    try {
      navigate("/national/login");
      const response = await axiosInstance.get("/admin/national/signout", {
        withCredentials: true,
      });
    } catch (err) {}
  };
  return logout;
};

export default useLogout;
