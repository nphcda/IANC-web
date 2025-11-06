import { useContext } from "react";
import AuthContext from "../../../utils/context/AuthProvider";

export const useAuth = () => {
  return useContext(AuthContext);
};
