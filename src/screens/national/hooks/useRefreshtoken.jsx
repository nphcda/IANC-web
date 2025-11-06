import axios from "axios";
import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useRefreshtoken = () => {
  const { setNationalAuth } = useAuth();
  const refresh = async () => {
    try {
      const response = await axiosInstance.get("/admin/national/refresh", {
        withCredentials: true,
      });
      if (response.data) {
        setNationalAuth((prev) => {
          return {
            ...prev,
            accessToken: response.data.accessToken,
            others: response.data.others,
          };
        });
        return response?.data?.accessToken;
      }
    } catch (error) {
      throw new Error(error);
    }
  };
  return refresh;
};

export default useRefreshtoken;
