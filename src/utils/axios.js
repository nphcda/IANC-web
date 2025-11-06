import axios from "axios";

const domain = import.meta.env.VITE_DOMAIN;

const axiosInstance = axios.create({
  baseURL: `${domain}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = axios.create({
  baseURL: `${domain}/api`,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
