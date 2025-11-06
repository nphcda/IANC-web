import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setLgaAuth } = useAuth();
  const navigate = useNavigate();
  const logout = async () => {
    setLgaAuth({});
    try {
      const response = await axiosInstance.get("/admin/lga/signout", {
        withCredentials: true,
      });
      navigate("/lga/login");
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
