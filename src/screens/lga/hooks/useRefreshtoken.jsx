import axios from "axios";
import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../../../utils/axios";

const useRefreshtoken = () => {
  const { setLgaAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosInstance.get("/admin/lga/refresh", {
      withCredentials: true,
    });
    setLgaAuth((prev) => {
      return {
        ...prev,
        accessToken: response.data.accessToken,
        others: response.data.others,
      };
    });
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshtoken;
