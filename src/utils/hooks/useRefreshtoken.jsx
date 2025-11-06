import axios from "axios";
import React from "react";
import { useAuth } from "./useAuth";
import axiosInstance from "../axios";

const useRefreshtoken = () => {
  const { setAuth } = useAuth();

  const refresh = async () => {
    const response = await axiosInstance.get("/refresh", {
      withCredentials: true,
    });
    setAuth((prev) => {
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
