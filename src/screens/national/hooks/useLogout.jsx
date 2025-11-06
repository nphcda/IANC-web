import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setNationalAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    setNationalAuth({});
    try {
      const response = await axiosInstance.get("/admin/national/signout", {
        withCredentials: true,
      });
      navigate("/national/login");
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
