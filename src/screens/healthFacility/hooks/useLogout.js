import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setHealthfacilityAuth } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    setHealthfacilityAuth({});
    try {
      const response = await axiosInstance.get(
        "/admin/healthfacility/signout",
        {
          withCredentials: true,
        }
      );
      navigate("/healthfacility/login");
    } catch (err) {
      console.error(err);
    }
  };
  return logout;
};

export default useLogout;
